let numbers = [0, 2, 4, 5, 6, 7, 20];

//voce pode usa-las ao inves de funções. x representa o parametro que teria a função
let plusOne = numbers.map(x => x + 1);

//esse é o código classico
let plusTwo = numbers.map(function(x){
    return x + 1;
});

//se a função tiver mais de um parametro
let numberPlusIndex = numbers.map((x, i) => x + i);

//novamente, assim seria do jeito classico
plusTwo = numbers.map(function(x, i){
    return x + i;
});

//e se eu tiver mais de uma instrução a ser executada? Voce pode fazer da seguinte maneira
let onlyPairIndex = numbers.filter(x => {
    if(i % 2 == 0)
        return true;
    return false;
});

//outro exemplo
onlyPairIndex = numbers.filter(x => i % 2 == 0);