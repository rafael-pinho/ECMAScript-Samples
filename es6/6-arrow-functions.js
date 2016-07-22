let numbers = [0, 2, 4, 5, 6, 7, 20];

//you can use arrow functions instead functions. x is the function parameter
let plusOne = numbers.map(x => x + 1);

//this is the classic code
let plusTwo = numbers.map(function(x){
    return x + 1;
})

//if the function have more than one parameter
let numberPlusIndex = numbers.map((x, i) => x + i);

//again, the classic way
plusTwo = numbers.map(function(x, i){
    return x + i;
})

//but, if have I more than one instruction? Well, you can do this way
let onlyPairIndex = numbers.filter(x => {
    if(i % 2 == 0)
        return true;
    return false;
});

//another sample
onlyPairIndex = numbers.filter(x => i % 2 == 0);