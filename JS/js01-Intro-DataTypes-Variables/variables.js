x=5
ad="Helen"
yas=40

console.log(yas)



/* -------------------------------------------------------------------------- */
/*                          JAVASCRIPT DE DEĞİŞKENLER                         */
/* -------------------------------------------------------------------------- */
// const let 
// ES6dan sonra gelen yapılardır
// Değişken tanımlama için kullanılır

//! CONST
// const : constant : sabit 
// const tckimlik=12332213532
// tckimlik=34534534534543
// ALınacak hata 
//2-variables.js:18 Uncaught TypeError: Assignment to constant variable.

// const tc=12344567890
// console.log(tc);
// const tc=23445555555

//!LET 
let toplam=0
x=60
y=70
toplam=x+y
console.log(toplam)

// GLOBAL ALAN
// program içinde her ortamdan uaşabilen ortak alandır

// LOCAL ALAN
// Bir block içidir. { } ile ifade edilen bölümler bloklardır, if bloğu, while,for

//Burası global alan

const sayi=5

{ 
    // Burası local alan
    console.log(sayi)
    const pi=3.14
    console.log(pi)
}

// console.log(pi)

//! VAR - her terden erişilebilir yeniden tanımlanabilir --- 

var number=90

{
    console.log(number)
    var number=50
}

console.log(number+15)




//?tırnak işareti içerisindeki değerler string ifadelerdir '' ""  ``
//? {}  işareti içerisindeki değerler  obje
//? [] işareti içerisindeki değerler arayy
//? String içerisinde yazılan sayolar string kabul edilir '10' bir number değil stringdir
