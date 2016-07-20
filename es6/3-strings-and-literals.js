let name = 'bond'

function getAge(birthdayYear){
    return new Date().getFullYear - birthdayYear;
}

//agora voce pode concatenar strings usando ${} dentro de ``
let hello = `Hello, I will introduce myself, my name is ${name}, so nice too met you`;
console.log(hello);

let helloAgain = `${hello}. I'm ${getAge(1980)} years old.`
console.log(helloAgain);

let andHelloAgain = `${hello}. I'm ${new Date().getFullYear - 1980} years old.`
console.log(andHelloAgain);

//es6 possui suporte para binarios e octadecimais

//0b indica binarios - o numero só conta depois do b
console.log(0b011)

//0o indica octadecimal - o numero só conta depois do o
console.log(0o503)