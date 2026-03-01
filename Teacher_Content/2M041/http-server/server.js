import { createServer } from 'http'
import fs from 'fs'

let server = createServer( (req , res)=>{
    // res.write('hello to every one i  am server')
    // console.log(req.url)
    let log = `${new Date().toLocaleString()} , url : ${req.url}`

    fs.writeFile('file.txt',log+'\n', {flag:'a'}, (err)=>{
        if(err) console.log(err)
        else console.log('log added')
    })
    if( req.url === '/' ){
        res.writeHead(200 , {'content-type' : 'text/html'})
        res.write('<h1>welcome to our server</h1>')
    }else if( req.url === '/about' ){
        res.write('welcome to about page')
    }else if( req.url === '/contact' ){
        res.write('welcome to contact page')
    }else{
        res.writeHead(404 , {'content-type' : 'text/html'})
        res.write('404 not found')
    }
    res.end()
    
})



server.listen( 3000 , ()=>{
    console.log('server listening over 3000')
})