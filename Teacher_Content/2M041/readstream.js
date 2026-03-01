import fs from 'fs'
// let  readData  = fs.createReadStream('test.txt', {encoding:'utf8',start:1 , end:3})
let  readData  = fs.createReadStream('test.txt', 'utf8')

readData.on('data' , (chunk)=>{
    console.log(chunk)
})
readData.on('end' , ()=>{
    console.log('read file have been done')
})