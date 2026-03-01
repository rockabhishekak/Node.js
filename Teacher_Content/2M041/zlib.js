import {gzip,gunzip} from 'zlib'
// import fs from 'fs'


let data = ' hello students welcome to the class '
// let fileData  = fs.createReadStream( 'text.txt')

gzip(data , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString('base64'))
        
    }
    gunzip(data,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data.toString())
            }
        })
})
