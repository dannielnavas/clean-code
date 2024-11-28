greet(); // >> imprime "Hola mundo" porque su alcance es local

function greet() {
  let greeting = "Hola mundo";
  console.log(greeting);
}

// El hoisting es un comportamiento de JavaScript que mueve las declaraciones de variables y funciones al inicio de su ámbito antes de que se ejecute el código.
// En el caso de las variables, solo se mueve la declaración y no la inicialización.

var greet = "hola mundo";

(function () {
  console.log(greet); // >> imprime "undefined" porque la variable greet se declaró pero no se inicializó
  var greet = "hello world";
  console.log(greet); // >> imprime "hello world"
})();


var greet = "hola mundo";

(function () {
  var greet;
  console.log(greet);  // >> imprime "undefined" porque la variable greet se declaró pero no se inicializó
  var greet = "hello world";
  console.log(greet); // >> imprime "hello world"
})();
