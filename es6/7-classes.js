//this will be not the best class model...but this don't matter , the object is only show es6 features

//now you can create classes with constructors
class Animal {
    constructor (regio, regnum, phylum, classis, weight) {
        this.regio = regio;
        this.regnum	= regnum;
        this.phylum= phylum;	
        this.classis = classis;	
        this.weight = weight;
    }

    //you can create geters
    get regio() {return this.regio;}
    get regnum() {return this.regnum;}
    get phylum() {return this.phylum;}
    get classis() {return this.classis;}
    get weight() {return this.weight;}
    //and setters
    set weight(newWeighe) {this.weight += newWeighe;}

    //methods too
    move(miles){
        this.weight -= miles / 4;
    }
}

//you can extends too
class Mammalia extends Animal {
    constructor (weight, color) {
        //call the base constructor
        super(weight);
        //set new properties
        this.color = color;
    }

    //define new methods
    drinkMilk(liters) {
        this.weight(liters / 2); 
    }

    //and override base class methods
    move(miles){
        //use super to call base class methods
        super.move(miles);
    }

    //this is a sample of static method
    static dog(){
        return new Animal(10, 'black');
    }
}

//calling the static method
let myDog = Mammalia.dog();