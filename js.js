let x1 = 2;
let x2 = 10;

let y1 = 3;
let y2 = 5;

h = Math.abs(x2-x1);
d = Math.abs(y2-y1);

console.log(h*d);


let a = 13.890123;
let b = 2.891564;
let n = 2;

let aa = Math.floor(a);
let bb = Math.floor(b);

let nora = a-aa;
let norb = b-bb;

let normal1 = Math.floor(nora*Math.pow(10,n));
let normal2 = Math.floor(norb*Math.pow(10,n));

console.log(normal1);
console.log(normal2);


let l = 100;
let m = -5;
let k = Math.abs(l-m);

random = (l<m) ? Math.random()*k+l : Math.random()*k+m;

let rand = Math.round(random); 
console.log(rand);


