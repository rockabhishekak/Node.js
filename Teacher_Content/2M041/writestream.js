import fs from 'fs'

let create = fs.createWriteStream('createWrite.txt')

create.write("this is a create write method and this is line no-1 \n")
create.write("this is a create write method and this is line no-2 \n")
create.write("this is a create write method and this is line no-3 \n")
create.write("this is a create write method and this is line no-4 \n")

create.end()

create.on('finish' , ()=>{
    console.log('writing data have been done')
})

create.on('error' , ( err)=>{
    console.log(err)
    
})