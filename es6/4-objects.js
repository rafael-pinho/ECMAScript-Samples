
function buildCar(year, color, type, enginePower)
{
    //retorna um objeto com a propriedade year e o valor correspondente ao parametro year e assim subsequentemente
    return {
        year,
        color,
        type,
        enginePower,
        //metodos podem ser declarados de forma mais facil também
        changeColor(newColor){
            this.color = newColor;
        },
        fuel: 100,
        //voce pode definir propriedades com nomes computados
        ["ru" + 'n']: function(){
            if(this.fuel)
                this.fuel --;
            else
                throw 'Out of fuel';
        }
    }
}

let civic = buildCar(2016, 'black', 'sedan', 2.0);

