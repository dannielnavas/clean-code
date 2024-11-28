// Ámbito de bloque se  refiere a la visibilidad de una variable dentro de un bloque de código. Un bloque de código es cualquier código que esté entre llaves {}.

// Ejemplo de ámbito de bloque

{
  let greeting = "Hola mundo";
  var lang = "es"; // var no tiene ámbito de bloque por lo que es una variable global
  console.log(greeting); // >> imprime "Hola mundo"
}

console.log(greeting); // >> ReferenceError: greeting is not defined
console.log(lang); // >> imprime "es"
