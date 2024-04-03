
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array

const sumArray = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i]
  }
  return suma;
};

let array = [1, 2, 3, 4, 5];

sumArray(array);


// Función filterEvenNumbers: Filtrar números pares de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con solo los números pares del array original
const filterEvenNumbers = (Array) => {
  let numerosPares = Array.filter(numero => numero % 2 === 0);
  return numerosPares;
};


let arrayNumPares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterEvenNumbers(arrayNumPares);

// Función findMaxNumber: Encontrar el mayor número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El mayor número en el array
const findMaxNumber = (maxArray) => {
  let maximo = Math.max(...maxArray);
  return maximo;
};

let numeros = [14, 5, 11, 11, 7, 1, 55, 37, 28];

findMaxNumber(numeros);




// Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
// Parámetros: array (Array) - Un array de strings
// Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
const toUpperCaseStrings = (arraylow) => {
  let arrayUp = arraylow.map(str => str.toUpperCase());
  return arrayUp;
};

let arrayLow = ["leo", "nohemy", "mariana", "yuno", "giio"];


toUpperCaseStrings(arrayLow)

// Función calculateAverage: Calcular el promedio de un array de números
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El promedio de los números en el array
const calculateAverage = (averageArray) => {
  if (averageArray.length === 0) {
    return 0;
  }

  let suma = 0;

  for (let i = 0; i < averageArray.length; i++) {
    suma += averageArray[i];
  }

  return suma / averageArray.length;
};

let averageArray = [15, 20, 14, 11, 36, 31, 30, 62, 64];

calculateAverage(averageArray);

// Función sortNumbersAscending: Ordenar un array de números de forma ascendente
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
const sortNumbersAscending = (arraySinOrden) => {
  let arrayOrdenado = arraySinOrden.slice();
  arrayOrdenado.sort((a, b) => a - b);

  return arrayOrdenado;
};

let arraySinOrden = [55, 31, 5, 11, 17, 21, 38, 64, 62];

sortNumbersAscending(arraySinOrden);

// Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
// Parámetros: 
// - array (Array) - Un array de elementos
// - condition (Function) - Una función de condición que devuelve true o false
// Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
const findFirstElement = (arrayElement, esPar) => {
  for (let i = 0; i < arrayElement.length; i++) {
    if (esPar(arrayElement[i])) {
      return arrayElement[i]
    }
  }
  return undefined;
};

let arrayElement = [1, 3, 5, 4, 7, 2, 5, 1];

function esPar(numero) {
  return numero % 2 === 0;
}

findFirstElement(arrayElement, esPar);


// Función countElements: Contar la cantidad de elementos en un array
// Parámetros: array (Array) - Un array de elementos
// Devuelve: Number - La cantidad de elementos en el array
const countElements = (array) => {
  return array.length;
};

let arrayElementos = ["Leo", "Nohemy", "GiiO", 5, 11, 22, 33, 44, 55];



// Función concatenateArrays: Concatenar dos arrays
// Parámetros: 
// - array1 (Array) - El primer array a concatenar
// - array2 (Array) - El segundo array a concatenar
// Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados

countElements(arrayElementos);
const concatenateArrays = (arrayConcatenarUno, arrayConcatenarDos) => {
  let arrayWeb = [];
  arrayWeb.push(...arrayConcatenarUno);
  arrayWeb.push(...arrayConcatenarDos);

  return arrayWeb;
};


arrayConcatenarUno = ["html", "css", "Js"];
arrayConcatenarDos = ["node", "php", "python"];

concatenateArrays(arrayConcatenarUno, arrayConcatenarDos);



// Función squareNumbers: Calcular el cuadrado de cada número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
const squareNumbers = (arrayBase) => {
  let arrayCuadrado = [];
  for (let i = 0; i < arrayBase.length; i++) {
    arrayCuadrado.push(arrayBase[i] * arrayBase[i]);
  }
  return arrayCuadrado;
};

let arrayBase = [2, 4, 6, 8, 5, 55, 65, 11, 33];

squareNumbers(arrayBase);



// Función flecha para agregar habilidades a un jugador de un juego
/*
Parámetros de entrada:
- jugador: objeto que representa al jugador del juego.
- nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.
 
Lo que hace la función:
Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe
 
Valor de retorno:
Retorna el objeto jugador modificado con la nueva habilidad agregada.
*/
const agregarHabilidad = (jugador, nuevaHabilidad) => {
  if (!jugador.habilidades) {
    jugador.habilidades = [];
  }

  if (!jugador.habilidades.includes(nuevaHabilidad)) {
    jugador.habilidades.push(nuevaHabilidad);
  }

  return jugador
};

let jugador = {
  nombre: "GiiO",
  nivel: 10,
  habilidades: ["Ataque", "defensa"]
};

let nuevaHabilidad = "Curacion";

jugador = agregarHabilidad(jugador, nuevaHabilidad);



// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
  let duracionTotal = 0;

  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].duracion >= 0) {
      duracionTotal += peliculas[i].duracion;
    }
  }

  return duracionTotal;
};

let peliculas = [
  { titulo: "El Padrino", duracion: 175 },
  { titulo: "Forrest Gump", duracion: 142 },
  { titulo: "Titanic", duracion: 195 }
];

calcularDuracionTotal(peliculas);


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
  return peliculas.filter(pelicula => {
    if (!genero) {
      return pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());
    } else {
      return pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()) && pelicula.genero.toLowerCase() === genero.toLowerCase();
    }
  });
};

let peliculass = [
  { titulo: "El Padrino", genero: "Drama" },
  { titulo: "Forrest Gump", genero: "Drama" },
  { titulo: "Titanic", genero: "Romance" }
];

let tituloABuscar = "El";
let generoABuscar = "Drama";

buscarPeliculas(peliculass, tituloABuscar, generoABuscar);


// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculasss) => {
  if (peliculasss.length === 0) {
    return 0;
  }

  let puntajesValidos = peliculasss.filter(pelicula => pelicula.puntaje >= 0);

  if (puntajesValidos.length === 0) {
    return 0;
  }

  let sumaPuntajes = 0;
  for (let i = 0; i < puntajesValidos.length; i++) {
    sumaPuntajes += puntajesValidos[i].puntaje;
  }

  return sumaPuntajes / puntajesValidos.length;
};


let peliculasss = [
  { titulo: "El Padrino", puntaje: 9 },
  { titulo: "Forrest Gump", puntaje: 8 },
  { titulo: "Titanic", puntaje: 7 }
];

calcularPromedioPuntajes(peliculasss)


// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
  // Filtrar las películas por año de lanzamiento.
  if (!año) {
    return peliculas;
  }
  return peliculas.filter(pelicula => pelicula.año.toString() === año.toString());
};

let peliculaas = [
  { titulo: "El Padrino", año: 1972 },
  { titulo: "Forrest Gump", año: 1994 },
  { titulo: "Titanic", año: 1997 },
  { titulo: "Interestelar", año: 2014 }
];

let añoBuscado = 1994;

filtrarPorAño(peliculaas, añoBuscado);

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
  // Filtrar las películas por género.

};


// Clase base que representa un vehículo
class Vehiculo {
  /**
   * Constructor de la clase Vehiculo.
   * @param {string} marca - La marca del vehículo.
   * @param {string} modelo - El modelo del vehículo.
   * @param {number} año - El año de fabricación del vehículo.
   */


  /**
   * Método para obtener la información del vehículo.
   * @returns {string} - La información del vehículo en formato de cadena de texto.
   */
  obtenerInformacion() {

  }
}


// Clase que representa un automóvil
class Automovil extends Vehiculo {
  /**
   * Constructor de la clase Automovil.
   * @param {string} marca - La marca del automóvil.
   * @param {string} modelo - El modelo del automóvil.
   * @param {number} año - El año de fabricación del automóvil.
   * @param {string} color - El color del automóvil.
   * @param {number} cilindrada - La cilindrada del motor del automóvil.
   * @param {number} potencia - La potencia del motor del automóvil.
   * @param {number} numPuertas - El número de puertas del automóvil.
   * @param {number} numAsientos - El número de asientos del automóvil.
   * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
   */


  /**
   * Método para obtener la información del automóvil.
   * @returns {string} - La información del automóvil en formato de cadena de texto.
   */
  obtenerInformacion() {

  }
}

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
  /**
   * Constructor de la clase Motocicleta.
   * @param {string} marca - La marca de la motocicleta.
   * @param {string} modelo - El modelo de la motocicleta.
   * @param {number} año - El año de fabricación de la motocicleta.
   * @param {string} color - El color de la motocicleta.
   * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
   * @param {number} potencia - La potencia del motor de la motocicleta.
   * @param {number} numRuedas - El número de ruedas de la motocicleta.
   * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
   */


  /**
   * Método para obtener la información de la motocicleta.
   * @returns {string} - La información de la motocicleta en formato de cadena de texto.
   */
  obtenerInformacion() {

  }
}

// Clase que representa un camión
class Camion extends Vehiculo {
  /**
   * Constructor de la clase Camion.
   * @param {string} marca - La marca del camión.
   * @param {string} modelo - El modelo del camión.
   * @param {number} año - El año de fabricación del camión.
   * @param {string} color - El color del camión.
   * @param {number} cilindrada - La cilindrada del motor del camión.
   * @param {number} potencia - La potencia del motor del camión.
   * @param {number} numEjes - El número de ejes del camión.
   * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
   * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
   */


  /**
   * Método para obtener la información del camión.
   * @returns {string} - La información del camión en formato de cadena de texto.
   */
  obtenerInformacion() {

  }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
  /**
   * Constructor de la clase Autobus.
   * @param {string} marca - La marca del autobús.
   * @param {string} modelo - El modelo del autobús.
   * @param {number} año - El año de fabricación del autobús.
   * @param {string} color - El color del autobús.
   * @param {number} cilindrada - La cilindrada del motor del autobús.
   * @param {number} potencia - La potencia del motor del autobús.
   * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
   * @param {string} tipoCombustible - El tipo de combustible del autobús.
   * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
   */


  /**
   * Método para obtener la información del autobús.
   * @returns {string} - La información del autobús en formato de cadena de texto.
   */
  obtenerInformacion() {

  }
}

// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
  /**
   * Constructor de la clase Bicicleta.
   * @param {string} marca - La marca de la bicicleta.
   * @param {string} modelo - El modelo de la bicicleta.
   * @param {number} año - El año de fabricación de la bicicleta.
   * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
   * @param {number} numMarchas - El número de marchas de la bicicleta.
   * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
   * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
   * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
   * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
   */


  /**
   * Método para obtener la información de la bicicleta.
   * @returns {string} - La información de la bicicleta en formato de cadena de texto.
   */
  obtenerInformacion() {

  }
}

/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.

module.exports = {
  sumArray,
  filterEvenNumbers,
  findMaxNumber,
  toUpperCaseStrings,
  calculateAverage,
  sortNumbersAscending,
  findFirstElement,
  countElements,
  concatenateArrays,
  squareNumbers,
  agregarHabilidad,
  calcularDuracionTotal,
  buscarPeliculas,
  calcularPromedioPuntajes,
  filtrarPorAño,
  calcularPromedioDuracionPorGenero,
  Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
};
