let numbers = [0, 2, 4, 5, 6, 7, 20];

//you can use arrow functions instead functions. x is the function parameter
//voce pode usa-las ao inves de funções. x representa o parametro que teria a função
let plusOne = numbers.map(x => x + 1);

//this is the classic code
//esse é o código classico
let plusTwo = numbers.map(function(x){
    return x + 1;
})

//if the function have more than one parameter
//se a função tiver mais de um parametro
let numberPlusIndex = numbers.map((x, i) => x + i);

//again, the classic way
//novamente, assim seria do jeito classico
plusTwo = numbers.map(function(x, i){
    return x + i;
})

//but, if have I more than one instruction? Well, you can do this way
//e se eu tiver mais de uma instrução a ser executada? Voce pode fazer da seguinte maneira
let onlyPairIndex = numbers.filter(x => {
    if(i % 2 == 0)
        return true;
    return false;
});

//another sample
//outro exemplo
onlyPairIndex = numbers.filter(x => i % 2 == 0);