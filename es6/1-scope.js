var people = [];

if(!people.length){
  //voce pode usar 'let' para limitar o escopo de uma variavel ao escopo do bloco.
  let germanGuy = {
    name: 'Tom'
  }

  let anotherGermanGuy = {
    name: 'Müller'
  }

  //os alemães somente são vistos dentro do bloco 'if'
  people.push(germanGuy);
  people.push(anotherGermanGuy);

  //
  var englishGuy = {
    name: 'Jerry'
  }

  var anotherEnglishGuy = {
    name: 'Wayne'
  }
}

//diferente de 'let', 'var' torna os ingleses visiveis em toda função
people.push(englishGuy);
people.push(anotherEnglishGuy);

for(var i = 0; i < people.length; i++){
  console.log(`Hi, my name is ${people[i].name}`);
}

//'i' é visivel tanto dentro como fora do looping pois está visivel no escopo da função
console.log(i);

//voce pode usar chaves para delimitar um bloco de escopo
{
  //aqui o ingles assume o valor somente dentro do bloco
  let englishGuy = {
    name: 'Alex'
  };

  //diferente do alemão que assume esse valor dentro do escopo da função
  var germanGuy = {
    name: 'Mario'
  }

  console.log(`Hi there, I'm , ${englishGuy.name}`);
  console.log(`Hi there, I'm , ${germanGuy.name}`);
}

//fora do bloco anterior o ingles volta a ter seu nome original
console.log(`Sorry, my real name is , ${englishGuy.name}`);

//a alemão mantem o nome que lhe foi atribuido
console.log(`I really change my name to , ${germanGuy.name}`);

for(let j = 0; j < people.length; j++){
  //'j' é visivel somente dentro do bloco do 'for'
  console.log(`Hello, my name is ${people[j].name}`);
}

//esse código irá falhar, 'j' não pode ser visto de fora do looping
console.log(j);