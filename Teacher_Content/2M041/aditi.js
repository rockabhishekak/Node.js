import fs from 'fs'
let create=fs.createWriteStream('sample.txt')
create.write("Hello World")
create.end()
create.on('finish',()=>{
    let readStream = fs.createReadStream('sample.txt',{encoding:'utf8'});
    readStream.on('data',(chunk)=>console.log(chunk));
});
