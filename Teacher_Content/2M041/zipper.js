import fs from 'fs';
import { createGzip } from 'zlib';

let readStream = fs.createReadStream('sample2.txt');

let writeStream = fs.createWriteStream('sample2.txt.gz');

let zipper = createGzip();

readStream.pipe(zipper).pipe(writeStream);

writeStream.once('finish',()=>console.log('zip complete'));