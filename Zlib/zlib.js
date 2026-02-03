import {gunzip, gzip} from 'zlib';
import fs from 'fs'
let fileData = fs.readFileSync('test.txt','utf8')
let data = 'hello students welcome to the class'
gzip(data,(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data.toString('base64'));
        
    }
    gunzip(data,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(data.toString())
        }
    })
})
gzip(fileData,(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data.toString('base64'));
        
    }
    gunzip(data,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(data.toString())
        }
    })
})