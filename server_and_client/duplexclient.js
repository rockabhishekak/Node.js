import {createConnection} from 'net'
let client=createConnection({port:2000},()=>{
    console.log('connected to server');
    client.write("Hello server, This is client james bond");
})
client.on('data',(data)=>{
    console.log(data.toString());
    client.end()


})
client.on('end',()=>{
    console.log('connetion terminated');
})