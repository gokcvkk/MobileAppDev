function sayHello(){
    console.log("Hello World");
}

sayHello()

const sayGoodBye = () => {
    console.log("Goodbye");
}

sayGoodBye()

function selamVer(isim){
    console.log("Hello $(isim)")
}

selamVer("gökce");
selamVer("zeynep");

selamVer(); // çıktı = Hello undefined 

function sum(a,b){
    return a+b;
}

console.log(sum(3,5)); // 8


function kare(a){
    return a*a;
}

console.log(kare(5)); // 25


function control(age){
    if (age >= 18) {
         return "Reşit";
    }
    return "Reşit Değil";
}

console.log(control(20));

function outside(){
    function inside(){
        console.log("iç fonk çalıştı");
    }
  console.log("dış fonk çalıştı");
  inside();
}

outside();

//OBJE

const car = {
    brand : "Tofaş",
    model : "Kartal",
    engine :"v12",
    "is-Running" : true,
    year : 1984,
    outsideSpeces : {
        color = "Red",
        howManyDoor :4,
    },
};

console.log(car);
console.log(car.engine);
console.log(car.year);

console.log(car.color); //undefined

console.log(car["is-Running"]);

car.model = "Şahin"

console.log(car);

console.log(car.outsideSpeces.color);

const numbers = [1,2,3,4,5];

console.log(numbers);
console.log(numbers.length);

const mixedarray = [
    12,
    "Gökce",
    true,
    null,
    {name:"gökce",lastname:"çevik"},
];

console.log(mixedarray[0]);

const fruits = ["elma","armut","çilek"];

fruits.push("karpuz"); // new elements
console.log(fruits)

fruits.pop() //sondaki elemanı çıkar
console.log(fruits)

fruits.shift() // ilk elemanı çıkar baştaki
console.log(fruits)

fruits.unshift("kiraz") // başa kiraz ekledi
console.log(fruits)

fruits[1] = "Karpuz"
console.log(fruits);

const names = ["Ahmet","Özhan","Ayşe"];

console.log(names.includes("Ahmet")) // Ahmet array içinde var mı

console.log(names.indexOf("Ayşe")) // Ayşe kıçıncı sırada bulunuyor

const users =[
    {
        name: "Gökce",
        age : 20,
    },
    {
        name: "Zeynep",
        age : 22,
    },
    {
        name: "Ayşe",
        age :30,
    },
    {
        name: "Ayşe",
        age :25,
    },
];

const findAyse = users.find(function(user){
   return user.name ==="Ayşe" ;
});

console.log(findAyse); // şarta uyan ilk objeyi aldı

const under25 = users.filter(function(usser){
    return user.age <= 25;
});

console.log(under25);


const firstuser = {
    name : "gökce",
    age : 20,
    city: "Ankara",
};

// JSON : verileri yapılandırılmış bir formatta saklamak ve iletmek için kullanılan hafif bir veri değişim formatıdır
const jsontr = JSON.stringify(firstuser); //js to json
console.log(jsontr);

const jsonobj =JSON.parse(jsontr) //json to js
console.log(jsonobj);

const sayilar = [-2,3,5,-4,12,9];

const pozitifsayılar = sayilar.filter(function(number){
    return number > 0
})

console.log(pozitifsayılar)


//DÖNGÜLER

for(let i = 0; i<=10; i++){
    if(i===3){
        continue;
    }
    if(i===6){
        break;
    }
    console.log(i);
}

let i = 5;

while(i<14){
    console.log(i);
    i++;
}

//ÖNEMLİ

const meyveler = ["elma","armut","çilek","kiraz"]

meyveler.forEach(function(meyve, index) {
    console.log(`${index + 1}. meyve: ${meyve}`);
});

// foreach ile map arasındaki fark map yeni bir array oluşturur

const sayilar2 = [1,2,3,4,5,6];

const kareler = sayilar2.map(function(number){
    return number * number;
});

console.log(kareler);