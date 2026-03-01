// console.log("welcome to lovely professional university");

// let ram = 10;
// let shyam = 20;
// console.log(ram + shyam)

// let lpu = "lovely professional university";
// console.log(`welcome to ${lpu} `)

let values = [ "ram" , "shyam" , "ajay" , "vijay" , 10 , 20 , 30 , true , false ];

// for(let i = 0; i < values.length; i++){
//     console.log(values[i]);
// }
values.forEach( (v , i) => { 
    console.log(`value at index ${i} is ${v}` );
 } )

