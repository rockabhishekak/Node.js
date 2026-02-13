import fs from 'fs';
fs.readFileSync('sample.txt','utf8',(err,data)=>{
    if(err)
    {
        console.error('Error reading file: ',err);
        return;
    }
    console.log('File contents: ',data);
});
console.log("hello");