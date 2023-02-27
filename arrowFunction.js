/*Diferencias entre las funciones */

function funcionRegular (a, b) {
    return a + b
}

const nuevaFuncionRegular = function (a, b) {
    return a + b
}

const funcionFlecha = (a, b) => {
    return a + b
}
//---------------------------------------------------------------------------


/*Ejercicio de par o impar */

//Con función regular.
function parOImparR(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es par");
    } else {
      console.log(numero + " es impar");
    }
  }

  console.log(parOImparR(2))
//---------------------------------------------------------------------------

//Con función de flecha.
const parOImparF = (numero) => {
    if (numero % 2 === 0) {
      console.log(numero + " es par");
    } else {
      console.log(numero + " es impar");
    }
  }

  console.log(parOImparF(1))
//---------------------------------------------------------------------------