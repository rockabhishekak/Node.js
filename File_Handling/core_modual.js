import * as fs from 'fs'
// fs.writeFile('test.txt','this is a file created by node',(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("File is written succecfully")
// })


r

fs.readFile('text.txt','utf8',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    console.log(data)
})



let data = fs.readFileSync('text.txt' , 'utf8')
console.log(data)


r