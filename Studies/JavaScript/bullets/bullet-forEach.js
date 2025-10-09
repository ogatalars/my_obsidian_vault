// É um metodo, função built-in do JS. USADO EM ARRAY

const doces = ['bala jujuba', 'bala azeda', 'babaloo', 'donuts', 'sonho', 'chocolate']

doces.forEach(function(item){console.log('-' + item)})

// outra maneira
doces.forEach(doceEspecifico => console.log(doceEspecifico))

//o valor retornado do .forEach é sempre não definido

//exemplo abaixo 

const frutas = ['manga', 'coco', 'banana', 'abacaxi', 'uva']

frutas.forEach(frutas => console.log(`Eu quero comer ${frutas}`))

// Ele não cria um novo array!