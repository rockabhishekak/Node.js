import fs from 'fs';
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err)
    {
        console.error('Error reading file: ',err);
        return;
    }
    console.log('File contents: ',data);
});
console.log("hello World!");
