//voce pode customizar o iteration behaviour de um objeto 
//(não consegui uma boa tradução para iteration behaviour mas é o comportamento interno dele quando é iterado)
let doubleAndDouble = function(value){
    return {
        [Symbol.iterator]() {
            return {
                next () {
                    value *= 2;
                    return { done: value > 1024, value }
                }
            }
        }
    }
} 

for (let n of doubleAndDouble(2)) {
    console.log(n);
}