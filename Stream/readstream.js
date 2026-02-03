import fs from 'fs'
let readData =fs.createReadStream('test.txt','utf8');
// let readData =fs.createReadStream('test.txt',{encoding:'utf8',start:1,end:4});
readData.on('data',(chunk)=>{
    console.log(chunk);
});
readData.on('end',()=>{
    console.log('read file have been done')
})