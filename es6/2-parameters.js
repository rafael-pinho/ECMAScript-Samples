//agora voce pode definir valores default para parametros
function sum(number, otherNumber = 10){
    return number + otherNumber;
}

//ambos mostrarão o mesmo output pois no segundo caso o segundo parametro tera o valor 10
console.log(sum(10, 10));
console.log(sum(10));

//voce pode agregar varios parametros em um array  
function sum(number, otherNumber, ...anotherNumbers){
    let sum = number + otherNumber;

    //todos os parametros além de 'number' e 'otherNumber' estarão no array anotherNumbers
    for(var i = 0; i < anotherNumbers.length; i++)
        sum += anotherNumbers[i];
}

//anotherNumbers = []
sum(1, 2);

//anotherNumbers = [3, 4, 5, 6, 7]
sum(1, 2, 3, 4, 5, 6, 7);

//voce pode usar o operador spread para dividir os itens de um array 
let arrayOne = [0, 1, 2];
let arrayTwo = [...arrayOne, 3, 4, 5];

{
    function log(a, b, c){
        console.log('a = ', a);
        console.log('b = ', b);
        console.log('c = ', c);
    }

    //o resultado do log sera a = 10; b = 545; c = 8;
    log(...[10, 545, 8]);
    //o operador spread também dividi os caracteres de uma string;
    //o resultado do log sera a = 1; b = 2; c = 3;
    log(...'123');
}