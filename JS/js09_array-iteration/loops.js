//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***")


//?Ornek
const maaslar = [50000, 35000, 12000, 44000]

let sum = 0

for(let i = 0; i < maaslar.length; i++) {
    sum += maaslar[i]
    console.log(i, sum)
}

console.log("SUM:", sum)



//?-------------------ÖRNEK ---------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

const notlar =[50, 45, 67, 100, 10]

const ellidenKucukNotlar = []
const ellidenBuyukNotlar = []

for(let i=0; i<notlar.length; i++) {
if (notlar[i] < 50){
    ellidenKucukNotlar.push(notlar[i])
}else{
    ellidenBuyukNotlar.push(notlar[i])
}
}
console.log(notlar)
console.log(ellidenBuyukNotlar)
console.log(ellidenKucukNotlar)

//?------------------------- FOR IN --------------------
const sayilar = [50000, 35000, 120000, 44000]

// let total = 0
// for (let i in sayilar) {
//     total += sayilar[i]
// }

// console.log("AVG:", total / sayilar.length)
const notlar1 =[50, 45, 67, 100, 10]

const ellidenKucukNotlar1 = []
const ellidenBuyukNotlar1 = []

for(let i in notlar1) {
    notlar1[i] < 50
    ? ellidenKucukNotlar1.push(notlar1[i])
    : ellidenBuyukNotlar1.push(notlar1[i])

}
console.log(notlar1)
console.log(ellidenBuyukNotlar1)
console.log(ellidenKucukNotlar1)