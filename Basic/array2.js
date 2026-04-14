let number = [2,4,8,10];
// for(let i=0;i<number.length;i++)
// {
//     console.log(number[i]);
// }
// When use arr then use .length
// console.log(number.length);
let ournumer = 8;
let flag = false;
number.forEach((x,a)=>{
    // console.log(`${a} :-> ${x}`);
    if(x==ournumer)
    {
        flag = true;
    }
});
console.log(flag);

// let ram = "Abhishek"
// for(let i=0;i<number.length;i++)
// {
//     console.log(ram[i]);
// }
