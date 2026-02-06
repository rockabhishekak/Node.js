import {createReadStream, createWriteStream, ReadStream, WriteStream} from 'fs'
import {createGunzip, createGzip} from 'zlib'
let read = createReadStream('test.txt')
let write = createWriteStream('test2.txt')
let gzip = createGzip()
read.pipe(gzip).pipe(write)
