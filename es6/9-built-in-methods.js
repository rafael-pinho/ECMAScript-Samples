//Voce pode atribuir propriedades de objetos para outro usando assign
let obj  = { propOne: 1 }
let src1 = { propTwo: 2, propThree: 3 }
let src2 = { propTwo: 22, propFour: 4 }
Object.assign(obj, src1, src2)

/*
    {
        propOne: 1,
        propTwo: 22,
        propThree: 3,
        propFour: 4
    }
*/
console.log(obj)

//ao invês de filter voce pode usar a função find para encontrar itens em um array
let numberList = [1, 2, 3, 87, 8, 48, 15];
let numberOne = numberList.find(x => x == 1);

//pode usar as novas funções para checar tipo, integridade e arredondar
console.log(Number.isNaN(numberOne));
console.log(Number.isFinite(numberOne));
console.log(Number.isSafeInteger(numberOne));
console.log(Math.trunc(1.3)); //mostrará 1

//voce pode checar em uma string (as proximas funcionalidades não são muito diferentes de 'indexOf')
let myString = "0123456789";

//se ela começa com determinados caracteres
console.log(myString.startsWith("012"));

//se ela termina com determinados caracteres
console.log(myString.endsWith("789"));

//se ela contém determinados caracteres
console.log(myString.includes("3456"));


