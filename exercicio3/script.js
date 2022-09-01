const arrayNumeros = [5,12,7,43]
const arrayStrings = ["gato","carro","bolsa"]
const arrayMisto = [31,"pato",true]

//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayNumerosCopia.push(9)
console.log(arrayNumeros , arrayNumerosCopia)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringsCopia.pop()
console.log(arrayStrings , arrayStringsCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayMistoCopia.splice(1,1)
console.log(arrayMisto , arrayMistoCopia)