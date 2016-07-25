function this_function_have_his_own_scope(){
  var people = [];

  if(!people.length){

    //you can use 'let' keyword to limit variable scope to the lexical scope
    //voce pode usar 'let' para limitar o escopo de uma variavel ao escopo do bloco.
    let germanGuy = {
      name: 'Tom'
    }

    let anotherGermanGuy = {
      name: 'Müller'
    }

    //the german guys is only seen inside if block
    //os alemães somente são vistos dentro do bloco 'if'
    people.push(germanGuy);
    people.push(anotherGermanGuy);

    var englishGuy = {
      name: 'Jerry'
    }

    var anotherEnglishGuy = {
      name: 'Wayne'
    }
  }

  //the english are seen in the entire function scopo
  //diferente de 'let', 'var' torna os ingleses visiveis em toda função
  people.push(englishGuy);
  people.push(anotherEnglishGuy);

  for(var i = 0; i < people.length; i++){
    console.log(`Hi, my name is ${people[i].name}`);
  }

  //'i' is visible in the entire funcion scope
  //'i' é visivel tanto dentro como fora do looping pois está visivel no escopo da função
  console.log(i);

  //you can use '{ }' to create a new scope but this only work with let
  //voce pode usar chaves para delimitar um bloco de escopo (afeta somente o let)
  {
    //the english will have this value only inside this block
    //aqui o ingles assume o valor somente dentro do bloco
    let englishGuy = {
      name: 'Alex'
    };

    //but the german will have his value replaced by the new value
    //diferente do alemão que assume esse valor dentro do escopo da função
    var germanGuy = {
      name: 'Mario'
    }

    console.log(`Hi there, I'm , ${englishGuy.name}`);
    console.log(`Hi there, I'm , ${germanGuy.name}`);
  }

  //as you can see, the english have his original value
  //fora do bloco anterior o ingles volta a ter seu nome original
  console.log(`Sorry, my real name is , ${englishGuy.name}`);

  //and the german have a new value
  //o alemão mantem o nome que lhe foi atribuido
  console.log(`I really change my name to , ${germanGuy.name}`);

  for(let j = 0; j < people.length; j++){

    //here 'j' is visible
    //'j' é visivel somente dentro do bloco do 'for'
    console.log(`Hello, my name is ${people[j].name}`);
  }

  //but not here, because of let keyword
  //esse código irá falhar, 'j' não pode ser visto de fora do looping
  console.log(j);
}

//global scope things are visible inside but this funcion variables are not visible outside
//variaveis e funções do scopo global são visiveis dentro dessa função mas nada do escopo da função é visivel de fora
this_function_have_his_own_scope();
