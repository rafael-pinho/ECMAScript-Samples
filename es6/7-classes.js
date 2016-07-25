//this will be not the best class model...but this don't matter , the object is only show es6 features
//não é o melhor modelo de classes...mas não importa, o objetivo é mostrar as funcionalidades do es6

//now you can create classes
//agora voce pode criar classes
class Animal {

    //and contructors too
    //e construtores
    constructor (regio, regnum, phylum, classis, weight) {
        this.regio = regio;
        this.regnum	= regnum;
        this.phylum= phylum;	
        this.classis = classis;	
        this.weight = weight;
    }

    //you can create geters
    //aqui temos alguns get
    get regio() {return this.regio;}
    get regnum() {return this.regnum;}
    get phylum() {return this.phylum;}
    get classis() {return this.classis;}
    get weight() {return this.weight;}

    //and setters
    //e sets
    set weight(newWeighe) {this.weight += newWeighe;}

    //methods too
    //além de metodos
    move(miles){
        this.weight -= miles / 4;
    }
}

//you can extends too
//Também é possivel herdar uma classe
class Mammalia extends Animal {
    constructor (weight, color) {

        //call the base constructor
        //chamada do contrutor da classe base
        super(weight);

        //set new properties
        //setando novas propriedades
        this.color = color;
    }

    //define new methods
    //definindo novos metodos
    drinkMilk(liters) {
        this.weight(liters / 2); 
    }

    //override base class methods
    //sobrescrevendo metodos
    move(miles){

        //use super to call base class methods
        //sempre use super para chamar metodos da classe base
        super.move(miles);
    }

    //this is a sample of static method
    //esse é um exemplo de um metodo estatico
    static dog(){
        return new Animal(10, 'black');
    }
}

//calling the static method
//e da chamada do metodo estatico
let myDog = Mammalia.dog();

//creating an instance of a class
//criando um objeto
let yourDog = new Mammalia(5, 'white');