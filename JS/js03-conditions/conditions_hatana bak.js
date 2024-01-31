/* -------------------------------------------------------------------------- */
/*                                                                       KARAR YAPILARI                               */
/* -------------------------------------------------------------------------- */

console.log("*** CONDITIONS ***")
//!örenek1
// const num1 = +prompt("Bir sayi giriniz:") buda oluyor fakat alttaki işlem daha kullanışlıymış çoklu yazımlarada ileride
const num1 = Number(prompt("Bir sayi giriniz:"))
// const num2= 5
// console.log(num1, typeof num1)
// console.log("Toplam:", num1 + num2)//?String birleştirme (concatination)

// + nın concatinate ve toplama görevi vardırç diğer matematik ifadeleirnin tek görevi vardır. 11:54 derse bir bak cumaretsi

//  consele yada web sayfasından aldığımız defoul herşey stringtir. Bu da il yıllarda sadece düz metinler vs olarak çıkmış olmasından kaynaklı. herşeyin metin tabanlı olmasındn kaynaklı.

//aritmetik işlemlerde kullanılacaksa numberlaştırmakta fayda var çoğu zaman


if (num1 < 0) {
    console.log("Girilen sayi negatiftir")
  } else if (num1 > 0) {
    console.log("Girilen sayi pozitiftir")
  } else {
    console.log("Girilen sayi 0'a eşittir")
  }


  //! Örnek2: 3 sayinin en buyugu

  const sayi1 = 5
  const sayi2 = 6
  const sayi3 = 6

//?1. yontem built-in fonks yardimiyla
//   const enBuyuk = Math.max(sayi1, sayi2, sayi3)
//   console.log("EnBuyuk", enBuyuk)

  //?2.yöntem (nested if)
//   if( sayi1 > sayi2) {
//     if (sayi1 >sayi3)
// {
//     console.log("Enbuyuk", sayi1);
// }  }

// if (sayi2 > sayi1) {
// if (sayi2 > sayi3) 
// console.log("Enbuyuk:", sayi3);
// }

//? 3. yontem (Logic oparatorler ile)

if(sayi1 > sayi2 && sayi1 > sayi3) {
    console.log("Enbuyuk:", sayi1);
}