// ? ======================================
// ?              SCOPE
// ? ======================================

console.log("******* SCOPE ********")

//! VAR

sayi1 = 33
var sayi1 //hoisting özelliği vardır
console.log(sayi1);
var sayi1 = 55 //hoisted olabilir.



//!scope.js:14 Uncaught ReferenceError: Cannot access 'deneme' before initialization (const ve let hoisted olmaz)
// console.log(deneme);
// let deneme = 5

var result = "Hi"

if(sayi1 === 33) {
    let result = "Halo"
    } else {
        var result = "Salut"
    }

    console.log(result)