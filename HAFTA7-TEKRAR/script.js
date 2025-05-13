let name;
/*let ile oluşturduğumuz bir değişkene daha sonrasında yeni bir değer atayabiliriz*/

const isim = "Gökce";
/*const ile oluşturulan değişkene yeni bir değer tekrar atanamaz*/

let names ="Gökce", middlename="Nisa", age=20;
console.log(age);

const myCar='Benim Arabam\nAudi';
console.log(myCar);

const myCity=`Yaşadığım Şehir
Ankara`;
console.log(myCity); //çok satırlı string , backtick

const sentence = "Adım" + name + " " + "yaşım" + age 
console.log(sentence)

const sentence2 = `Adım ${name} yaşım ${age}`
console.log(sentence2)

console.log(sentence2.length);

const myNumber = 35.8 //float
const myNumber2 = 15 //int
const myNumber3 = "15" //string

console.log(typeof myNumber2);

const isUserLoggedIn = false
console.log(isUserLoggedIn);

let usersMoney;
console.log(usersMoney) //undifened js tarafından atanır

const usersMoney2 = null
console.log(usersMoney2) // kullanıcı tarafından bilinçli null

const number1 = 68;
const myString = String(number1);
const myString2 = number1.toString()
console.log(typeof myString)
console.log(typeof myString2)
console.log(typeof String(isUserLoggedIn))

const numberString = "123"
const stringToNumber = Number(numberString)
console.log(stringToNumber)

console.log(typeof parseInt("45.8")) //number tam sayı
console.log(typeof parseFloat("45.8")) //number float sayı

console.log(typeof parseInt("45hshsdhh67")) // 45 olarak alar geri kalanı görmez

console.log(Boolean(0)) //False
console.log(Number(True)) //1

console.log(Number("abc")) //NaN

console.log(Number(undefined)); //NaN

console.log(Number(null)) //0

console.log(Boolean("")) // false

console.log(Boolean(NaN)) //false

console.log(Boolean(null)) //false

console.log(Boolean(undefined)) //false

console.log("5" + 1); //51 string örtülü dönüsüm

console.log("5" * 2); //10 js otomatik numbera çevirir acık dönüsüm 

console.log("5" - 2); //3

//OPERATORLER

console.log(15 % 4) // kalan 3 döndürür

console.log(5**2) //25

console.log(5 == "5") //tipi önemsemez true

console.log(5 === "5") // tipi önemser false

console.log(5 != "5") //tipi önemsemez false

//IF-ELSE

if(kosul) {
    //gerçeklesmesini istedigimiz eylmen
}

else{
    //diger durumda gerceklesecek eylem
}

const myAgee =30

if(myAgee >=18) {
    console.log("ehliyet alabilir")
} else {
    console.log("ehliyet alamaz,yas tutmuyor")
}

let not1 = 65;

if (not >= 90) {
  console.log("Pekiyi");
} else if (not >= 70) {
  console.log("İyi");
} else if (not >= 50) {
  console.log("Geçer");
} else {
  console.log("Kaldın");
}

let not2 = 85;

if (not < 90 && not > 80) {
  console.log("Notun 80 ile 90 arasında");
} else {
  console.log("Bu aralıkta değil");
}

let not3 = 75;

if (not < 50 || not > 70) {
  console.log("Ya 50'den küçük ya da 70'ten büyük");
} else {
  console.log("50 ile 70 arasında");
}


//TERNARY
let yas = 18;
let mesaj = (yas >= 18) ? "Reşit" : "Reşit değil";
console.log(mesaj);  // "Reşit"


