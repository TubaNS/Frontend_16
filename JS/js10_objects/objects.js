//* ============================================
//*                 (OBJECTS)
//* =============================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*** Objects ***")

const ogrİsim =["ahmet","ismet","saffet"]
const ogrSoyisim=["yılmaz","can","baki"]
const ogrAdres = ["kadıköy","şeebinkarahisar","seferihisar"]

console.log(`${ogrİsim[0]} - ${ogrSoyisim[0]} - ${ogrAdres[0]} `)

//! 3 farkli yontemile Object oluşturulabilir
/* ------------- 1-Object literal (En cok tercih edilen yontem) ------------- */


const kisi = {
    isim: "Ahmet",//ilk yazılan key :'den sonrası value
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",
    dogum: "01/01/1975",
    maas: 70000,
    ehliyet: true,
    diller: ["english", "arabic", "urartuca"],
    notlar: {mat101: "AA", tur101: "BB", ece101: "AA"},
    dogumtarihi: 1990,
    yasHesapla: function () {
        return new Date().getFullYear() - this.dogumTarihi
    },  
  }

  //! this keywordu içerisinde bulunduğumuz objeyi refere eder.
  //! Global alanda yazılan this ise haliyle global objeyi refere eder.
  //! window tarayıcıın herşeyini barındıran temel br objedir.
  console.log(this) //? global alanda(Window nesnesi  gösterir)
 console.log(kisi.isim)
 console.log(kisi.maas)
   console.log(kisi.diller[2])
   console.log(kisi.notlar.ece101) //? AA


   console.log(kisi.yasHesapla())
  // console.log(new Date().getDate)

  