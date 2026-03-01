import {createConnection} from 'net'

let client = createConnection( {port:4000} , ()=>{
    console.log('connected to server')
    client.write('hello from client')
} )
client.on('data' , ()=>{
    console.log('message from server')
    client.end()
})
client.on('end' , ()=>{
    console.log('disconnected from server side')
})