function greet() {
  let greeting = "Hola mundo";
  console.log(greeting);
}

greet(); // >> imprime "Hola mundo" porque su alcance es local
console.log(greeting); // >> ReferenceError: greeting is not defined
