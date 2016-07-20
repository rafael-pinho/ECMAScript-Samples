//voce pode atribuir valores da seguinte maneira
let a, b, c = [1, 2, 3];
let x, , y = [1, 2, 3];

console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(x); //1
console.log(y); //3

//para inverter valores
[x, y] = [y, x];
console.log(x); //3
console.log(y); //1

//voce pode atribuir valores default
[a = 1, b = 2, c = 3, x = 4, y = 5] = [3, 2, 1];
console.log(a); //3
console.log(b); //2
console.log(c); //1
console.log(x); //4
console.log(y); //5



{
    function getCar(){
        return {
            color: 'black',
            engine: 2.0,
            details: {
                name:'audi tt',
                price:160000
            }
        }
    }

    {
        //cria as variaveis color e engine com os valores das propriedades color e engine do objeto retornado
        let {color, engine} = getCar();
    }

    {
        //cria as variaveis color, engine, name e price
        let {color, engine: engine, details: { name }, details: { price : price}} = getCar();
    }
}



{
    //voce pode passar um array para uma função e desconstrui-lo em parametros
    function buildCar([color, engine, name, price]){
        return {
            color,
            engine,
            name,
            price
        }
    }

    let carro = buildCar(['black', 1.8, 'audi a3', 28000]);

    //voce pode desconstruir um objeto também
    function paintCar({ color: oldColor, engine, name, price}, newColor){
        return {
            oldColor,
            color: newColor,
            engine,
            name,
            price
        }
    }

    carro = paintCar(carro, 'red');
}