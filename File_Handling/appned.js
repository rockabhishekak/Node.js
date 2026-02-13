import fs from 'fs'

const stream = fs.createWriteStream('sample.txt', { flags: 'a' });

stream.write('Line 1\n');
stream.write('Line 2\n');
stream.end();
