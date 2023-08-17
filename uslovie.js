let password = "vdfba_1h";

if (password.length > 4 && (password.includes('_') || password.includes('-'))) {
    console.log("Пароль допустимый");
} else {
    console.log("Пароль не допустимыйый");
}



let name1 = "serGAY";
let family2 = "ORehov";

let first1 = name1.substring(0, 1);
let last1 = name1.substring(1);

let first2 = family2.substring(0, 1);
let last2 = family2.substring(1);

let n = first1.toUpperCase();
let f = first2.toUpperCase();

let nn = last1.toLowerCase();
let ff = last2.toLowerCase();

console.log(n,nn);
console.log(f,ff);



number = 18;

if (number%2 === 1) {
    console.log("нечетное число");
} else {
    console.log("четное число");
};