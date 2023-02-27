// Repaso de arrays
//Cada uno lo probe pegandolo a la consola de herramientas para desarrolladores.
const myArray = [1, 2, 3];
const myArray2 = [4, 5, 6];

//-------------------------------------------------------------------------------------
/*Hace lo mismo que "arr[0]" solo que en vez de eso hacemos "arr.at(0)"
Pero eso si, podemos usar numeros negativos si queremos ver las 
partes finales del arreglo.
EJM: Si quieres ver lo que esta al final del arreglo debes poner "arr.at(-1)"
la penultima seria "arr.at(-2)" y asi hasta llegar al primer valor.
*/
const at  = (arr) => {
    return console.log(arr.at(-1));
}
//-------------------------------------------------------------------------------------

//Lo mismo que hacer " 'hola' + 'mundo' " pero en logar de eso hacemos:
//"hola".concat("mundo")
const concat = (arr1, arr2) => {
    console.log(arr1.concat(arr2));
}
//-------------------------------------------------------------------------------------

/*La función constructor de array es: 'Array()' y 
sirve para crear arreglos de forma más complicada.*/
let arrConst = new Array('A', 'b', 3)
console.log(arrConst)
//-------------------------------------------------------------------------------------

//Copia desde el punto de partida el rango que tu le pongas sin contar el
//final EJM: copyWithin(a, b, c) copiara a partir de a todo lo que este desde
// b hasta c-1 (la c no cuenta)
const copyWithin = (arr) => {
    console.log(arr.copyWithin(0,1,2));
}
//-------------------------------------------------------------------------------------

/*'entries()' es un iterador */
let arrayE = ['a', 'b', 'c'];
let iterator1 = arrayE.entries();
console.log(iterator1.next().value);
// Arrojará el primer valor junto al índice de la forma: [0, "a"]
console.log(iterator1.next().value);
// Si se repite, arrojará el siguiente valor junto al índice de la forma: [1, "b"]
//-------------------------------------------------------------------------------------

/* Ve si un array cumple la condición dada y retorna un booleano*/
const Every = myArray.every(myArray => myArray  > 0)
console.log(Every);
//-------------------------------------------------------------------------------------

//Llena el array con lo que le pidas arr.fill(elemento, inicio, fin sin contar)
const fill = (arr) => {
    console.log(arr.fill(0));
}
//-------------------------------------------------------------------------------------

//Elimina todo lo que no cumpla con la caracteristica dada
const filter = myArray.filter(funcion);

const funcion = (arr) => {
    return arr % 2 === 0;
}

console.log(filter);
//-------------------------------------------------------------------------------------

//.find encuentra lo que le pidas, llega a ser más interesante con objetos
const encontrar = (arr) => {
    return arr ===  2;
}
const find = myArray.find(encontrar);

console.log(find);
//-------------------------------------------------------------------------------------

/*Lo mismo que el .find, solo que esta vez te dice el indice donde esta lo que estas
buscando*/
const buscaTres = (arr) => {
    return arr === 3;
}
const findIndex  = myArray.findIndex(buscaTres);

console.log(findIndex);
console.log(myArray);
//-------------------------------------------------------------------------------------

/*funciona como el find, pero 
invirtiendo su orden de búsqueda desde el último valor hacia el primero
*/
const findLast = myArray.findLast((parte) => parte == 2);
console.log(findLast);
//-------------------------------------------------------------------------------------

//Muestra el indice en donde esta lo que buscas pero va de derecha a izq
const findLastIndex = myArray.findLastIndex((parte) => parte == 2);
    console.log(findLastIndex);
//-------------------------------------------------------------------------------------

/*Si un array tiene muchas matrices puedes ir quitando las que quieras
hasta dejarla normal (pones cuantos corchetes quieres quitar dentro del ())*/
const arr3 = [1, [2, [3, [4]]]];
const flat = arr3.flat(3);
 console.log(flat);
//-------------------------------------------------------------------------------------

/* Mapea cada elemento usando la función map() y 
luego crea un nuevo arreglo con todos los elementos 
concatenados dentro de el usando flat().*/
const arrayFlatMap = ['1', ['2', '3'], ['4', '5'], '6', ['7', '8'], '9', ['10'], []]
console.log(arrayFlatMap.flatMap(variable => variable))
//-------------------------------------------------------------------------------------

/* forEach() ejecuta una función especificada 
a cada elemento del array (una sola vez)*/
myArray.forEach(variable => console.log(variable * 2))
//-------------------------------------------------------------------------------------

/*Booleano que dice si lo que buscas esta en el arreglo */
const frutas = ["manzana", "pera", "uva"];

const includes = frutas.includes("mango");
console.log(includes);
//-------------------------------------------------------------------------------------

/*Te dice el indice exacto de lo que buscas */
const indexOf = frutas.indexOf("uva");
console.log(indexOf);
//-------------------------------------------------------------------------------------

/* combina a todos los elementos en un String y 
los separa por el valor determinado.
Si no se especifica, los elementos del arreglo 
seran separados por comas.*/
const arrayJoin = ["Estoy", "haciendo", "la", "tarea", 1, 9];
console.log(arrayJoin.join('*'));
//-------------------------------------------------------------------------------------

/*Devuelve como un nuevo objeto un Iterador
 que contiene los indices decada elemento del arreglo.*/
const arrayKey = ["Vamos", "a", "ver"]
const iterador = arrayKey.keys()
for (const llave of iterador) {
            console.log(llave)
}
//-------------------------------------------------------------------------------------

/* Lo mismo que indexof pero de derecha a izquierda*/
const LastIndexOf = frutas.LastIndexOf("uva");
console.log(LastIndexOf);
//-------------------------------------------------------------------------------------

/* El map permite ejecutar una funcion dentro de cada indice del array*/
const doble = (x) =>{
    return x * 2;
}
const arrayDoble = myArray.map(doble);
console.log(arrayDoble);
//-------------------------------------------------------------------------------------

/*El pop elimina el ultimo elemento del array */
myArray.pop();
console.log(myArray);
//-------------------------------------------------------------------------------------

/*Push te agrega un elemento al final del array */
myArray.push("Hablalo");
console.log(myArray);
//-------------------------------------------------------------------------------------

/*PREGUNTAR*/
/*Ejecuta una función sobre cada elemento del arreglo, 
devuelve un valor único.*/
console.log(myArray.reduce((a, b) => {return a + b}));
//-------------------------------------------------------------------------------------

/*Funciona como el reduce() pero aplica la función de 
derecha a izquierda.*/
console.log(myArray.reduceRight((a, b) => {return a * b}))
//-------------------------------------------------------------------------------------

/*Literalmente voltea el array, lo que estaba al inicio ahora esta al final*/
myArray.reverse();
console.log(myArray);
//-------------------------------------------------------------------------------------

/*Elimina el primer elemento del array, podemos
 almacenarlo tambien como el pop */
myArray.shift();
console.log(myArray);
//-------------------------------------------------------------------------------------

/* Crea una copia del array desde donde tu le 
digas y termine (donde termina si cuenta)
podemos usar numeros negativos*/
myArray.slice(1, 4);
console.log(nyArray);
//-------------------------------------------------------------------------------------

/*Verifica si al menos hay un elemento en el array que cumple
es booleano */
const verifi = (item) => {
    return item > 2;
}
const res = myArray.some(verifi);
console.log(res);
//-------------------------------------------------------------------------------------

/*El sort acomoda lafabeticamente pero
 para numeros si hay que hacer una funcion para comparalos */
 const arrN = ["b", "a", "d", "c"]
 const res2 = arrN.sort();
 console.log(res);
//-------------------------------------------------------------------------------------

 /*cambia el contenido de un array 
 eliminando elementos existentes y/o agregando 
 nuevos elementos*/
 const arrP = [1, 3, 4, 6]
 const arrp2 = arrP.splice(1, 0, 2);
console.log("Elementos: [" + arrP + "], Elementos eliminados: '" + arrp2 + "'");
//-------------------------------------------------------------------------------------

/* Devuelve todos los elementos del arreglo como si 
fuera de tipo String separados por comas.*/
const arrString = ['Haciendo', 'la', 'tarea']
console.log(arrString.toString())
//--------------------------------------------------

/* Agrega uno o más elementos al inicio del arreglo. 
También cambia la longitud del arreglo.*/
console.log(myArray.unshift(1, 2))
//-------------------------------------------------------------------------------------

/* Devuelve un nuevo objeto Iterador que 
contiene los valores para cada índice.*/
const arrVal = ['1', '2', 'y', '3']
var i = arrVal.values()
for (let digito of i) {
            console.log(digito)
}
//-------------------------------------------------------------------------------------