//es6 possui support para constantes
//es6 has support for constants
const age = 26;
const person = {
		name: 'this is a test'
	};

//voce sempre deve inicializar uma constante. O seguinte codigo causa um erro
//you always should initialize a constant. The following code will fail
const heigth;

//o codigo a seguir falhará por que voce atribuiu um novo conteúdo para a variavel
//this code will fail because you can't assign a new content to a variable 
age = 27;

//o seguinte codigo falha também
//this code will fail too
person = {
		name = 'this is not a test'
	};

//mas esse codigo não. Voce não pode atribuir valor para a variavel 'person' mas voce pode manipular os dados do objeto
//but this code not. You can not assign a new value to 'person' but you can change the object content
person.name = 'this is not a test';
person.age = age;