import {createServer} from 'net';
let server = createServer((abhi)=>{
    abhi.on('data',(data)=>{
        console.log(data.toString());
        abhi.write("Hello from server");
    })
    abhi.on('end',()=>{
        console.log('client disconnected');
        abhi.end();
    })
})
server.on('end',()=>{
    console.log('disconneted');
})


server.listen(3000,()=>{
    console.log("Server is listing");
})

// Funtions
// 1. createServer
// 2. abhi
// 3. on
// 4. call back Funtions
// 5.log
// 6.toString
// 7.write
// 8.end 
// 9.end
// 10.listen
// 11.call back function

// varible
// 1.
// 2.
// 3.
// 4.