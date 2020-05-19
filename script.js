// let answers = [];


// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет", "");


// document.write(answers);


let answers = [];
let questions = [
    "Как ваше имя?",
    "Как ваша фамилия?",
    "Сколько вам лет"
];


// for (let i = 0; i < questions.length; i++) {
// answers[i] = prompt(questions[i]);
// }

// console.log(answers);

let i = 0;
do {
answers[i] = prompt(questions[i]);
i++;
}
while (i < questions.length );



// let i = 0;
// while (i < questions.length) {
//     answers[i] = prompt(questions[i]);
//     i++;
// }


console.log(answers);
console.log(first);