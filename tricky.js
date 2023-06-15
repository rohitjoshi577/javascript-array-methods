const users = [
    {a : 1 , b:2} ,
    {a : 2 , b:1} ,
    {a : 3, b:0} ,
    {a : -2 , b:4} ,
]

let addA = users.reduce((t,v)=>{
    t=t+v.a;
    return t;
} , 0)

console.log(addA);


// // double each a and b and store in new array

// let b = users.map(x=> {
//     x.a= 2*(x.a);
//     x.b = 2*(x.b);

//     return x ;
//   } )

// //   console.log(b);
// console.log(users);


//   let c = users.filter(x=>{
//     if(x.a >=2){return x}
//   })

  
//   console.log(c);