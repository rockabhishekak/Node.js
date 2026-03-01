import express  from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

let filename = fileURLToPath(import.meta.url)
let directryname = dirname(filename)


let server = express()

server.use(express.urlencoded({extended : false}))

server.get('/' , (req , res)=>{
    res.sendFile(path.join(directryname , 'index.html'))
})

// server.get('/' , (req , res) => {
//     res.sendFile(path.join(__dirname , 'index.html'))
// })
server.get('/about' , (req , res) => {
    res.sendFile(path.join(directryname , 'about.html'))
})
server.get('/contact' , (req , res) => {
    res.sendFile(path.join(directryname , 'contact.html'))
})
// server.get('/hrithik' , (req, res)=>{ 
server.post('/hrithik' , (req, res)=>{ 
    fs.readFile('studentdata.txt' , 'utf-8' ,(err , data)=>{
        if(err){
            console.log(err)
        } else{
            let parsedData = JSON.parse(data)
            let submitdata = req.body
            parsedData.push(submitdata)
            fs.writeFile('studentdata.txt' , JSON.stringify(parsedData) , (err)=>{
                if(err){
                    console.log(err)
                } res.send('Data ha s been submitted successfully')
            } )
        }
    })
    res.sendFile(path.join(directryname , 'contact.html'))
    // let submitdata = req.query
    // console.log(submitdata)
})

// server.get('/' , (req , res) => {
//     let index = fs.readFileSync('index.html' , 'utf-8')
//     res.writeHead(200 , {'Content-Type' : 'text/html'})
//     res.write(index)
//     res.end()
// })

// server.get('/about' , (req , res) => {
//     // res.send('About Us')
//     let about = fs.readFileSync('about.html' , 'utf-8')
//     res.writeHead(200 , {'Content-Type' : 'text/html'})
//     res.write(about)
//     res.end()
// })
// server.get('/contact' , (req , res) => {
//     // res.send('Contact Us')
//     let contact = fs.readFileSync('contact.html' , 'utf-8')
//     res.writeHead(200 , {'Content-Type' : 'text/html'})
//     res.write(contact)
//     res.end()
// })

server.listen(3000 , ( ) => { 
    console.log('server is ready to work')
})