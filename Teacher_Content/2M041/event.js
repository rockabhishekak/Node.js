// let eventEmitter = require('events')
import { EventEmitter}  from 'events'

let ticket = new EventEmitter

ticket.on('end', (name)=>{
    console.log("thanks to book your ticket" , name)
})
ticket.on('start', (name)=>{
    console.log("welcome to book your ticket" , name)
})
// ticket.on('start' , ()=>{})

ticket.emit('start', 'ram')
ticket.emit('end' ,'ram')