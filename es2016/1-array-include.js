//agora os arrays possuem a função includes (similar a indexOf)
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(1))//true
console.log(numbers.includes(10))//false

//a diferença entre "includes" e "indexOf": include encontra NaN e não diferencia +0 e -0
console.log(numbers.includes(NaN));//false
numbers.push(NaN);
console.log(numbers.includes(NaN));//true