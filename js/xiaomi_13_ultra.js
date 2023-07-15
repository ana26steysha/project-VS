let Human = {
  for: 17,
  from: "Canada",

  adres: {
    steet: "small",
    citi: "smalss",
  },
};
console.log(Human);
console.log(Human.adres);

let haus = {
  //age: 40,
  name: ":Oleg",
};
if (haus.name) {
  console.log(haus.age);
}

let userInfo = {
  name: "Baca",
  age: 30,
};
console.log(userInfo);

delete userInfo["name"];

console.log(userInfo);

let user = {
  name: "Aleks",
  age: 28,

  //user.lastname = "Olena";
  //delete user.age;
  //"last name": "ella",
};

console.log(user["last name"]);

let lenaa = {
  const: "anton",
};
console.log(lenaa.const);

let leg = {
  hend: "hend2",
};
console.log("hend" in leg);

let user2 = {
  name: "Makcim",
  age: 49,
  LastName: "pypok",
};
for (let key in user2) {
  console.log(key);
  console.log(user2[key]);
}

let user3 = {
  name: "alekse",
  id: 44,
  LastName: "alera",
};
console.log(Object.entries(user3));

//методы массивов к объектам Javascript. Object keys, values, entries, enumerable

let farm = {
  animals: "cows",
  many: 33,
  name: "Pupkin",
  Lastname: "kulekin",
};

//farm.helloo = "hello";

let entries = Object.entries(farm);
console.log(entries);

delete farm["many"];
console.log(farm);

//Методы объектов. Ключевое слово "this"

// let user4 = {
//   name: "Oleg",
//   age: 22,
//   Hioleg() {
//     alert("hello" + this.name);
//   },
// };

// user4.Hioleg = function () {
//   alert("hello");
// };
//console.log(user4);

// user4.Hioleg();

function color() {
  console.log(6 / 4 + 2);
  console.log(this);
  this.style.background = "red";
}

//color();

//document.querySelector("p").onclick = color;

let p = document.querySelectorAll("p");
p.forEach(function (element) {
  element.onclick = color;
});
