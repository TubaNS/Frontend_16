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

