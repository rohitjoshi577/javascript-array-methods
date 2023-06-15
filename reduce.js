let a = [5,1,4,2];

let b = a.reduce((t,v)=>{
    t=t+v;
    return t;
} , 0)


console.log(b)


let c = a.reduce((max, value)=> {if (value>=max){ max= value}
return max} , -Infinity)

console.log(c);