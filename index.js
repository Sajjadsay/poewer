var a = 7;
var b = 5;
var c = a;
var i;
for (i = 1; i < b; i++) {
    console.log(a, "*=", c);
    a *= c;
}
console.log(a);
