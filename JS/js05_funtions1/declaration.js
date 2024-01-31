// ? ===========================
// ?        FUNCTIONS
// ? ============================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*******************************/
selamla()


//? Fonksiyonun tanımlanması (hoisted) 
// tanımlama bir kere yapılabilir ama çaığırılma n kere
//?Parametresiz (Disaridan bir deger almiyor)

function selamla(){
    console.log("Selam Cohort16")
}

selamla() //? Invoke (Call)
selamla()


//? Parametreli Func.

function SelamVer(cohort, ders){
    console.log(`Merhaba ${cohort} -${ders}` )
}

SelamVer("Cohort16","Javascript")
SelamVer("Cohort15", " CSS")


//? Ornek

function topla(s1,s2){
    console.log("Toplam", s1 + s2)
}
const s1 = +prompt("S1:")
const s2 = +prompt("S2:")

topla(s1, s2)