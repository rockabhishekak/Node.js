// console.log("Welcome to LPU");
// let ram=10;
// let shyam = 20;
// console.log(ram + shyam);
// var lpu = "Lovely professinal university";//we can use var,let,const
// console.log(`welcome to ${lpu}`);
let values = ["ram","shyam","ajay","vijay",10,20,30,true,false];


// for(let i=0;i<values.length;i++)
// {
//     console.log(values[i]);
// }

let vall =["rammm",true];
values.forEach((val,index)=>{
    console.log(`value at index ${index} is ${val}`);
})


vall.forEach((val,index)=>{
    console.log(`value at index ${index} is ${val}`);
    
})
// console.log(`${values[0]} and ${values[1]} is brothers`);


//table print
let table=3;
for(let i=1;i<=10;i++)
{
    console.log(`${table} X ${i} = ${i*table}`);
}
