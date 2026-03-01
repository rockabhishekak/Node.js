import * as fs from 'fs'

// fs.writeFile('test.txt', 'this is a file creates by node' , (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// } )
// fs.readFile('text.txt' , 'utf8', (err , data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

let data = fs.readFileSync('text.txt' , 'utf8')
console.log(data)