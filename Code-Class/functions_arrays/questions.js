// 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"

function isimFormatla(ad,soyad){
    console.log(ad);
return `${soyad[0].toLocaleUpperCase()+soyad.slice(1)}, ${ad[0].toLocaleUpperCase()+ad.slice(1)}`;
}

const format = isimFormatla('Ali', "Yılmaz")
// const str = "string";
// let newStr = str.toLocaleUpperCase() + str.slice(1)
console.log(format);

// . Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
// input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
//output : // Pijamali hasta, yagiz sofore cabucak guvendi.

const text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";

const chars = {
            'ğ': 'g',
            'Ğ': 'G',
            'ü': 'u',
            'Ü': 'U',
            'ş': 's',
            'Ş': 'S',
            'ı': 'i',
            'İ': 'I',
            'ö': 'o',
            'Ö': 'O',
            'ç': 'c',
            'Ç': 'C'
};
console.log(chars['Ü']);










const newText = text.replace(/[çÇğĞıİöÖşŞüÜ]/g, (item)=>{
    console.log(chars[item]);
    
    if(chars =='ı'){
        return 'i';
    }else if (chars == 'ğ') {
        return 'g'
    }
})
console.log(newText);
//19. satırdaki /g buradaki g global demek ve bunu yapınca bütün cümleyi bazalıyor yoksa yakaladığı tek birtaneyi değiştirip geçiyor



function replaceToEngText(str){






    return ;
}
// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]



// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5]
// output : 28

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map((item)=>{
return item*item
}).filter((item2)=> item2 % 2 === 0 )
console.log(newArr);

let sum =0;
newArr.forEach((num)=>{
sum += num*2
})
console.log(sum);
// 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).


