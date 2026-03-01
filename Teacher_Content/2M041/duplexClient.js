import {createConnection} from 'net'
let client  = createConnection( {port:2000} , ()=>{
    console.log('connected to server')
    client.write("hello server, this is client james bond")
})
client.on('data' , (data)=>{
    console.log(data.toString())
    client.end()
})
client.on('end' , ()=>{
    console.log('connection terminated')
})