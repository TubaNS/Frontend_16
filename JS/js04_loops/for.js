// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

//? for döngüsünde kosul cümlesinde == veya != operatorlerini kullanmak sonsuz veya girilmeyen döngüye yol açması muhtemeldir. Bu sebeğle, genelde >, <, <=, >= islemleri kullanılır.

// //!girilmeyen döngü
// for(let i =1; i == 50; i = i * 2) {
// console.log(i);
// }


// //!sonsuz döngü
// for (let i = 1 ; 1 ; i = i * 2){
//     console.log(i);
// }
//console.log("Bitti");

//?sonsuz döngü
// for (let i =1; ; i/=2){
//console.log(i);
//}(




//? Ornek 5 kişinin notu girerek ortalaması hesaplayan kodu yazınız.
// let sum = 0
// let i = 0
// for (let i ; i < 5; i ++) {
//     const grade = Number(prompt(`Enter ${i}. grade:`))
//     sum = sum + grade
//     console.log(sum);
// }

// console.log(i);

// console.log(`AVG: ${sum / i}`)


//? geri yonde degisim 
for ( let i = 10; i >= 0; i--) {
  console.log(i);
}

//?aralik verme

const n1 = 5
const n2 = 5
let sum = 0

if (n1 > n2) {
    console.log("n2 should be bigger than n1") 
} else { 
for (let i = n1; i <= n2; i++) {
    sum += i
}
console.log("SUM:", sum)
    }


    //? break - continue

    for (let i = 0; i <= 10; i++) {
        if(i % 3) {
            continue
        }
        if (i === 6) {
            break
        }
        console.log(i);
    }