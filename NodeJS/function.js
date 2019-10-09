//1. Basic Function
function sayHello() {
    console.log("Hello Ega");
}

sayHello();

//2. Return Function
function giveChar() {
    return 'E';
}

var char = giveChar();
console.log(char);

//3. Function With Params
function plusFive(number) {
    return number + 5;
}

console.log(plusFive(10));

//4. Function With More 1 Params
function countTriangle(alas, tinggi) {
    var luas = 0.5*(alas*tinggi);
    return luas;
}

console.log(countTriangle(5,5));

//tambahkan score masing2 participant dengan angka 10
//Denny = 20, Ibnu = 15
//kerjain pake while/for/foreach

var participants = [
    {
        name: "Denny",
        score: 10,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Ibnu",
        score: 5,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Mumun",
        score: 7,
        hobbies: ["Nakutin orang"]
    }
];

//Jawabannya
for (index in participants) {
    participants[index].score += 10;
    console.log(participants[index]);
    console.log("========================================================");
}

for (p of participants) {
    p.score += 10;
    console.log(p);
    console.log("========================================================");
}
