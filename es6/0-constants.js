//es6 possui support para constantes
const age = 26;
const person = {
		name: 'this is a test'
	};

//voce sempre deve inicializar uma constante. O seguinte codigo causa um erro
const heigth;

//o codigo a seguir falhará por que voce atribuiu um novo conteúdo para a variavel
age = 27;

//o seguinte codigo falha também
person = {
		name = 'this is not a test'
	};

//mas esse codigo não. Voce não pode atribuir valor para a variavel 'person' mas voce pode manipular os dados do objeto
person.name = 'this is not a test';
person.age = age;