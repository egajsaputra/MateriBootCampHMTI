var name;
name = "My Name";
console.log(name); //console run

var angka1 = 10; //integer
var angka2 = 5.5 //double / float

var apaAja = true; //boolean true false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(apaAja);

var names = ["One", "Two", "Three", 26];

console.log(names);
console.log(names[2]);
console.log(names.length);
console.log("Data Terakhir", names[names.length - 1]);

var biodata = ["ahasj", "abh", "ahab", 24]; //array
var biodata = {
    name : "HAGsy",
    age : 24,
    adress: "Bekasi",
   
    hobbies : ["bola", "futsal", "apa"], //array of array
    ucapkata : function() {
        console.log("ada ibu ibu guys");
    }
};

console.log(biodata);
console.log("Namanya : ", biodata.name);
console.log("Umurnya: ", biodata['age']);
console.log("Hobi ke 1", biodata.hobbies[1]);
console.log("hobi terkahir", biodata.hobbies[biodata.hobbies.length - 1]);
biodata.ucapkata();

//array of object
var peserta = [
    {
        name: "aghdak",
        age: 20
    },
    {
        name: "ajdhk",
        age: 26,
        adress: "bekasi"
    }
];

console.log(peserta);
console.log("peserta pertama", peserta[0]["name"]);
console.log("umur peserta pertama", peserta[0].age);
