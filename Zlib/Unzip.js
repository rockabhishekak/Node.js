import {createReadStream, createWriteStream} from 'fs'
import {createGunzip} from 'zlib'
let read = createReadStream('test2.txt')
let write = createWriteStream('test_unzip.txt')
let gunzip = createGunzip();
read.pipe(gunzip).pipe(write);
write.on('finish',()=> console.log("Unzip the file"));
