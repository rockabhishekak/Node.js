// let EventEmitter = require('events')
import { EventEmitter } from "events";

let booking = new EventEmitter();

booking.on('done', (name) => {// .on use for targetig the events
    console.log("booking done",name);
});
booking.on('start',()=>
{
    console.log("booking Start")
    
});

booking.emit('done','ram');// .emit use for creating the events
booking.emit('start');
