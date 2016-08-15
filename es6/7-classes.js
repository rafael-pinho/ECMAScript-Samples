//não é o melhor modelo de classes...mas não importa, o objetivo é mostrar as funcionalidades do es6

//agora voce pode criar classes
class Animal {

    //e construtores
    constructor (regio, regnum, phylum, classis, weight) {
        this.regio = regio;
        this.regnum	= regnum;
        this.phylum= phylum;	
        this.classis = classis;	
        this.weight = weight;
    }

    //aqui temos alguns get
    get regio() {return this.regio;}
    get regnum() {return this.regnum;}
    get phylum() {return this.phylum;}
    get classis() {return this.classis;}
    get weight() {return this.weight;}

    //e sets
    set weight(newWeighe) {this.weight += newWeighe;}

    //além de metodos
    move(miles){
        this.weight -= miles / 4;
    }
}

//Também é possivel herdar uma classe
class Mammalia extends Animal {
    constructor (weight, color) {

        //chamada do contrutor da classe base
        super(weight);

        //setando novas propriedades
        this.color = color;
    }

    //definindo novos metodos
    drinkMilk(liters) {
        this.weight(liters / 2); 
    }

    //sobrescrevendo metodos
    move(miles){

        //sempre use super para chamar metodos da classe base
        super.move(miles);
    }

    //esse é um exemplo de um metodo estatico
    static dog(){
        return new Animal(10, 'black');
    }
}

//e da chamada do metodo estatico
let myDog = Mammalia.dog();

//criando um objeto
let yourDog = new Mammalia(5, 'white');