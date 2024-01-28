let a = 7 ;
let b = 5 ;
let c = a ;
let i;
for(i=1;i<b;i++){
    console.log(a,"*=",c);
    a*=c;
}
console.log(a);