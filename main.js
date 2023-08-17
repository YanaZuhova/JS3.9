//console.log("hello, World");

function myLog() {
    console.log("Hi");
    console.log("Hey");
}

myLog();

function greeting(name = "user") {
    console.log("Hi, dear ", name, "!");
}

greeting("Alex");
greeting("John");
greeting("Bob");
greeting();

//стрелочные функции
const myltiplyTwo = (num) => {
    console.log(num*2);
};

myltiplyTwo(15);


const myltiplyThree = (numb) => {
    let result = numb*3;
    return result;
};

let myVar = myltiplyThree(17);

console.log(myVar);


const myltiplyFour = (num) => num*3;

console.log(myltiplyFour(4));