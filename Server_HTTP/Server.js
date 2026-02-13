import {createServer} from 'http'
let port = 3000;
let server = createServer((req,res)=>{
    res.write("Hello This is server");
    // console.log(req.url);
    // if(req.url=='/')
    // {
    //     console.log("Everything");
        
    // }
    // else if(req.closed){
    //     console.log("Closed")
    // }
    // else{
    //     console.log("Nothing")
    // }


    res.end();

});


server.listen(port,()=>{
    console.log(`Server listing on ${port}`);
})
// host ke bad => http://localhost:3000/about likhana 
