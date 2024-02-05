
/* -------------------------------------------------------------------------- */
/*                                   STRINGS                                  */
/* -------------------------------------------------------------------------- */
// Bir string, metin veya karakter dizisi olarak adlandırılan verileri temsil eder. JavaScript'te stringler çift tırnak ("), tek tırnak ('), veya backtick (`) içinde tanımlanabilir. 

//? String oluşuturma yöntemleri
const str1="new string"
const str2='new string'
const deger="merhaba"
const str3=`new string ${deger}`   // backtickler ile template literal
const str4=new String("new string")
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)
console.log("🎈🎆🎇🧨✨")
console.log("©")
/* -------------------------------------------------------------------------- */
//! ---------------------------- ESCAPE CHARACTERS -------------------------- */

// "Escape characters" (kaçış karakterleri), özel bir anlamı olan karakterlerin belirtilmiş bir amaç için kullanılmasını sağlayan karakterlerdir

//  \ Escape karakterler \işareti ile kullanılır

// \ hemen yanındaki karkateri göz ardı edilmesini sağlar

let metin='Ömer\'in kalemi'
let path="c:\\Users\\Kullanıcılar"
console.log(path)   // users\kullanıcılar

// \n  new line => bir alt satıra geçmesini sağlar
// \t tab boşluğu verir ( 8 karakterlik boşluk)
const parag="\tMerhaba Cohort 16 sakinleri\nGününüz güzel geçsin"
console.log(parag)

// Unicode karakterleri için 
console.log("\u2615")
console.log("\uD83C\uDF39")
console.log("\uD83D\uDCB2")
console.log("\u00A9") 

console.log(`       Merhaba Cohort 16 sakinleri   🌹  

Gününüz güzel geçsin`)
// console.clear()
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                        STRING YAPISI VE INDEXLEME                         */
/* -------------------------------------------------------------------------- */

let course="Clarusway"
console.log(course)

console.log(course[0])
console.log(course[4])
console.log(course[7])
// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable
course[4]="a" // değişim yapılamaz
course="Clarusway Bootcamp"
console.log(course)

for (let i=0; i<=17;i++){
    console.log(course[i])
}

/* -------------------------------------------------------------------------- */
//!                         STRING PROPERTY AND METHODS                       */
/* -------------------------------------------------------------------------- */

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? length
//? prototype

console.log(course.length)

for (let i=0; i<course.length;i++){
    console.log(course[i])
}
console.clear()
for (let i=course.length-1; i>=0;i--){
    console.log(course[i])
}
const emoji="🎆"
console.log(emoji.length)


//! ************STRING METHODS ************
//! -------------------------------------------------------------------------- */

// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.
//! String Birleştirme

const name="John"
const surname="Due"
const job="Developer"

// +
console.log("Our customer's name: "name+" surname:"+surname+" and his job:"+job)
console.log(object);console.log(`our customers's name:${name}`);


