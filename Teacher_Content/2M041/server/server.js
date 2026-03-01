import { createServer } from 'net'

let server = createServer( (hrithik)=>{
    hrithik.on('data' , (data)=>{
        console.log(data.toString())
        hrithik.write('hello from server')
    })
    hrithik.on('end' , ()=>{
        console.log('client disconnected')
        hrithik.end()
    })
})

server.listen(4000 , ()=>{
  console.log('server is listening ')  
})