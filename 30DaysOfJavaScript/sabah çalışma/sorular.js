/* -------------------------------------------------------------------------- */
/*  //? 11.   Change each company name to uppercase one by one and print them out    */
/* -------------------------------------------------------------------------- */

const company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

let buyukharf = company.map(function(a){
    return a.toUpperCase();

})
console.log(buyukharf)

 //?12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 //?  Apple, IBM, Oracle and Amazon are big IT companies.

 let sentence = company.slice(0, company.length-1).join(", ") + ' and ' + company[company.length-1] + 'are big IT companies.'

 console.log(sentence);

//* -------------------------------------------------------------------------- */
//?Check if a certain company exists in the itCompanies array. 
//?If it exist return the company else return a company is not found
//* -------------------------------------------------------------------------- */

let arama = "Arcelik";
if (company.includes(arama)){
    console.log(`${arama} company exists in the company array.`);
}else{
    console.log(`${arama} company is not found in the company array.`);
}


//* -------------------------------------------------------------------------- */
 //?  14. Filter out companies which have more than one 'o' without the filter method                                     
//* -------------------------------------------------------------------------- */

let filterOut = [];
for (i = 0; i < company.length; i++){
    let sirket = company[i];
    let oCount = 0
    
    for (let j = 0; j < sirket.length; j++){
        if (sirket[j].toLowerCase()  === 'o'){
            oCount++;
        }
    }

    if (oCount<=1){
        filterOut.push(sirket);
    }
}

console.log(filterOut);

// i ile içerdeki elemana erişiyoruz j ile içerdeki elemanaların harflerine erişiyoruz tektek

//* -------------------------------------------------------------------------- */
//? 15 Sort the array using sort() method                                      */
//* -------------------------------------------------------------------------- */

console.log(company.sort());
 console.log(company.sort().reverse());

//*ikinci Yöntem
// company.sort(function(a, b){
//     return a - b;
// }
// )

// console.log(`Normal Siralama : ${company.slice("").join(", ")}.`);

// company.sort(function(a, b){
//     return b.localeCompare(a);
// })

// console.log(`Tersten Siralama : ${company.slice("").join(", ")}.`);








//**  19 Slice out the middle IT company or companies from the array*/

// const company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]; yukarfa yazıyor diye yoruma aldım bunu

const len = company.length
const middle = Math.floor(len/2)
console.log(middle);

if(len % 2 ===0) {
    company.splice(middle-1, 2)
} else { 
    company.splice(middle, 1)
}
console.log(company);

company.pop()

console.log(company);

company.splice(1)

console.log(company);





//** Önce bütün noktalam işaretlerini kaldırın /114-230 sayıt bu işlem/ ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın */

let text =

'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

console.log(cleanText);

text1 = "Mr Blue has a blue house and a blue car."

let res = text1.replace("blue", "red")
let res1 = text1.replaceAll("blue", "red")
let res11 = text1.replace(/blue/g, "red")
let res2 = text1.replace(/blue$/, "red")

console.log(res); 
console.log(res1);
console.log(res11);
console.log(res2);

let myBen = "Ben bir robot yesil robot"
console.log(myBen.replace(/robot$/, "yasam"));

let wordArr = cleanText.split(" ")
console.log(wordArr);
console.log(wordArr.length);


// **In the following shopping cart add, remove, edit items

//**  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//**  add 'Meat' in the beginning of your shopping cart if it has not been already added
//**  add Sugar at the end of you shopping cart if it has not been already added
//**  remove 'Honey' if you are allergic to honey
// **modify Tea to 'Green Tea' **//

const  shoppingCart = ['Milk', "Vodka", 'Water', 'Pear', 'Coffee', 'Tea', 'Honey', 'Tea']

shoppingCart.unshift("Meat")
console.log(shoppingCart);

shoppingCart.push("Sugar")
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Honey"));

// shoppingCart.splice(4,1);
// console.log(shoppingCart);

const bolunmus = shoppingCart.slice(4, 5)
console.log(bolunmus);
console.log(shoppingCart);

let sira = shoppingCart.lastIndexOf("Tea")

console.log(shoppingCart.lastIndexOf("Tea"));

shoppingCart[sira] = "GREEN"
console.log(shoppingCart);

shoppingCart.splice(6, 1, "Apple")
console.log(shoppingCart);