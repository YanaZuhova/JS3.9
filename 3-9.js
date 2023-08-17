function article(nameArt = "frontend") {
    console.log("Name of new article - ", nameArt, "!");
}
article("Javascript");
article("Technoligy");
article("React");
article("Angular");
article();


function exponentiation(chislo,stepen) {
    return Math.pow(chislo,stepen);
};
let ChisloVstepeni = exponentiation(2,5);
console.log(ChisloVstepeni);


const eexponentiation = (cchislo,sstepen) => {
    let result = Math.pow(cchislo,sstepen);
    return result;
};
let CchisloVstepeni = eexponentiation(3,7);
console.log(CchisloVstepeni);


const eeexponentiation = (ccchislo,ssstepen) => Math.pow(ccchislo,ssstepen);

console.log(eeexponentiation(5,3));
