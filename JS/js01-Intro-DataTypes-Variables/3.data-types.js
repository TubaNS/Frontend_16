/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x=15.34
console.log(typeof x)


/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas=40
sayi=29.12
console.log(yas)

sonuc=(sayi*7)+18
console.log(sonuc)

const pi=Math.PI
console.log(pi)

//? Ondalıklı kısmı düzenlemek için kullanılna yöntemler
// round

let yuvarlanmisSonuc=Math.round(sonuc)
console.log(yuvarlanmisSonuc);
// yuarıya yuvarlıyor

// trunc
let truncSonuc=Math.trunc(sonuc)
console.log(truncSonuc)
// sadece tam sayı kısmını virgülden sonrasnı saymıyor.

// virgülden sonra gelen ondalıklı kısımda kaç hane gösterilmesini sitiyorsanız tofixed(sayı)
// Bir sayıya toFixed uygulandığında sonucu string'dir.
let fixedSonuc=sonuc.toFixed(2)
console.log(sonuc.toFixed(2))
console.log(fixedSonuc)


//!RANDOM metodu-----çok ihtiyaç olan bir programmış
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
// console.clear()

console.log(Math.round(Math.random()))

console.log(Math.pow(5,3))    //üssü - kuvvet alma
console.log(Math.sqrt(144));  //karekök
console.log(5**3)  //kuvvet alma

console.clear()

/*------------------------------------------------------------------*/
//!STRING DATA TYPE
 
ad="George"

let str1="merhaba dünya bugün '17 ocak'"
let str2='merhaba dünya'
let str3=`merhaba dünya ${ad}`
let str4=new String("merhaba dünya") 
// $ işareti ile değişken almış oldu
// `` bactcihk işaet çıkarmak i.çin algr+; e bas
// \işaetinden sonra ' veya "" koyduğunda bunu komut olarak  anlamıyor pythondaki gibi

console.log(typeof str4, str4)
console.log(str1);

console.log(str1[4]);
// [] içine yazınca index numarasına ulaşıyoruz index  numarası 0'dan başlıyor.
//string içindeki değer ulaşılır ama değiştirlemez
// immutable
str1[4]="ü"

str1="Merhaba FS16"
console.log(str1);

let kimlik=2422343232
let adSoyad="John Smith"
let yass=45

console.log("Personelimiz", adSoyad,"'in Kimlik numarası:", kimlik, yass)
//Template Literal, string literal

//stringleri dinamik olarak kullanılmayı sağlar

// stringler yazılırken değişkenlerde kullanılanabilmemizi sağlar

console.log(`Personelimiz ${adSoyad}'in 
Kimlik Numarası:${kimlik} yaş'ı :${yass}`)

console.clear()

//! BOOLEAN
//true yada false değeri tutar

let deger="rewrwer"

console.log(Boolean(deger))

let sifre="12*45"
let isOpen=true

if (sifre==12*45){
    console.log("Sisteminiz açık");
}

else{
    console.log("sisteminiz kapalı");
}


/*------------------------------------------------------------*/


//!NULL

let personel=null
console.log(typeof null)

console.log(Boolean(null==null));
console.log(Boolean)
console.log(null+5)

// console.clear()

//!UNDEFINED

let phoneNumber;
console.log(phoneNumber)

phoneNumber="+9054689548"
console.log(typeof phoneNumber)

function sum(){
 return"toplam=4"}

 console.log(sum());

 //!Nan - Not a number

 let n;

 let result=n+15
 console.log(result)
 console.log(isNaN(result))


 //NON PRIMITIVE
 //Array,Object
//referansla çağırılabilen yapılardır
 let personelList=["Ali","Ayşe","Sema"]  //Array
let personelData={name:"Ali",surname:"Güven", age:"45"} //Object

//function
function sum(){
    return "toplam=4"
}

