/* -------------------------------------------------------------------------- */
/*                                  OPERATOR                                  */
/* -------------------------------------------------------------------------- */

//!Arithmethic Operators

let a=10
let b=2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**6) //üssü alma işlemi
console.log(a % 2) //remainder (modules) kalanı bulma


// let z=253
// console.log(z%11)

console.log(360/60)
console.log(375 % 60)


let result=365/6
console.log(Math.trunc(result))
console.log(result.toFixed())
console.log(typeof result.toFixed())



//saat ve dakika bulma

let time=375

let hour=Math.trunc(time/60)
console.log(hour)

let minute=375 % 60
console.log(`375 dakika=> ${hour}:${minute}`)

// gün sorma
let day=180 % 7
console.log(day);

// console.clear()

//INCREMENT / DECREMENT

//post ve pre olarak adlandırılır

//Post increment

let x=5

console.log(x++)
console.log()

console.log(x--) // 6 yı yazdı bir zalttı
console.log(x) // 5


//Pre Increment
console.log(++x)
console.log(--x)

// for(let i ; i<20; i++) bu sonra kullanılacak

// console.clear()

/*----------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                             ASSIGMENT OPERATORS                            */
/* -------------------------------------------------------------------------- */

let t=10
let y=5

console.log(t)
console.log(y)


console.log(t=t+y)
console.log(t+=y)
console.log(t-=y)
console.log(t*=y)
console.log(t/=y)
console.log(t**=y)
console.log(t%=y)


let k=18
let h=3
console.log(h +=k)


let sayi=45.986
console.log(Math.trunc(sayi))
console.log(sayi)
// console.clear()

/* -------------------------------------------------------------------------- */
/*                            COMPARISON OPERATORS                            */
/* -------------------------------------------------------------------------- */

//Karşılaştırma operatörleri bize Boolean sonuç döndürür.

let c=2
let d="2"

console.log(typeof c)
console.log(typeof d)
console.log(c==d)       //tipi benim için öenmli değil değerleri kullansın dediğimzde bu
console.log(c===d)

console.log(c !=d)  //eşit değil mi- false 2 2 ye eşit
console.log(c!==d) //eşit değil mi - true biri string biri number olduğu için eşit değil.

console.log(3<2)
console.log(3>2)
console.log(3>=2)


/*------------------------------------------------------------------------------------ */
/* -------------------------------------------------------------------------- */
/*                              LOGICAL OPERATORS                             */
/* -------------------------------------------------------------------------- */

//! AND - && ( ve anlamındadır)
//And mükemmeliyetçidir. 
//Herşey true olmalı yoksa true değer dönmez.

console.log(Boolean( "Merhaba"))
console.log(Boolean(0))
console.log(Boolean(2))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean([]))

console.log([] && 0 && 2)
console.log([] && "M" && 5)

// console.clear()
//! OR- ||
//Herşey false olsa bile bir tane true, true döndürmeye yeter
// Hepsi false ise en son false değerini verir

console.log(0 || null || 2 || undefined)
console.log(0 || null || undefined)

console.log(! null)  //ünlem tersini ifade ettiği için null normlade false tersi olduğu için true verdi

