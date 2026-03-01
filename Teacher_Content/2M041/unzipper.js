import fs from 'fs';
import { createGunzip } from 'zlib';

let readStream = fs.createReadStream('sample2.txt.gz');

let writeStream = fs.createWriteStream('sample3.txt');

let unzipper = createGunzip();

readStream.pipe(unzipper).pipe(writeStream);

writeStream.once('finish',()=>console.log('unzip complete'));