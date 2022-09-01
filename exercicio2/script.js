const arrayNumeros = [5,12,7,43]
const arrayStrings = ["gato","carro","bolsa"]
const arrayMisto = [31,"pato", true]

//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNumeros.length)
console.log(arrayStrings.length)
console.log(arrayMisto.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNumeros[0])
console.log(arrayStrings[1])
console.log(arrayMisto[2])

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(arrayNumeros.includes(12))
console.log(arrayMisto.includes("gato"))