// los argumentos son los que se utilizan en las llamadas de las funciones para ejecutar la función
// los parámetros los que usamos para trabajar con elementos externos a la función

//parámetro -> number
function getDouble(number) {
  return number * 2;
}

//argumento -> 3
console.log(getDouble(3)); // >> 6

// No superar 3 argumentos por función

// parámetros por defecto

function greet(name = "strange") {
  return `Hola, ${name}`;
}

console.log(greet()); // >> "Hola, strange"
console.log(greet("Mundo")); // >> "Hola, Mundo"

// El parámetro por defecto puede mitigar errores en la ejecución de la función

// Es recomendado no usar los parametros por defecto en funciones

// Parámetros rest o spread operator

function sum(...numbers) {
  return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // >> 15

// Permite tener parámetros adicionales en la función

const course = {
  name: "Curso de JavaScript",
  content: "Este es el contenido del curso",
};

const courseCloned = Object.assign({}, course);

console.log(courseCloned); // >> { name: "Curso de JavaScript", content: "Este es el contenido del curso" }

// Spread operator

const courseSpread = { ...course }; // >> { name: "Curso de JavaScript", content: "Este es el contenido del curso" }

const numbers = [1, 2, 3, 4, 5];

const clonedNumbers = numbers.slice();
const clonedSpreadNumbers = [...numbers];

// concatenar mas de un arreglo

const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const allNumbers = [...numbersA, ...numbersB];
