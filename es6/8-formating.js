//voce pode formatar números de acordo com o padrão de cada região
let brazilianNumbers = new Intl.NumberFormat("pt-BR"),
    usaNumbers = new Intl.NumberFormat("en-US")
    deutchlandNumber = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

console.log('Brasil: ', brazilianNumbers.format(1000000.09));
console.log('USA: ', usaNumbers.format(1000000.09));

//no caso dos alemães formatamos com informações sobre a moeda local
console.log('Das macht: ', deutchlandNumber.format(1000000.09));

//voce pode também formatar datas
var brazilianDate = new Intl.DateTimeFormat("pt-BR");

console.log('Date', new Date());
console.log('Formated date', brazilianDate.format(new Date()));