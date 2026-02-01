import fs from 'fs'
let create=fs.createWriteStream('sample.txt')
create.write("Hello World !");
create.end();
create.on('finish',()=>{
    console.log("data have been written");
    let readd=fs.createReadStream('sample.txt','utf8')
    readd.on('data',(chunk)=>{
        console.log(chunk);
    })
})
