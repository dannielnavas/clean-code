// Las clases son una forma de definir un objeto en JavaScript. (class) ademas de ser un método de organización potente

// Introducción en ES6

// función constructora antes de ES6

function Person(name) {
  this.name = name;
}

var person = new Person("Sami");
console.log(person.name); // >> "Sami"
// con ES6

class PersonES6 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hola, soy ${this.name}`;
  }
}

const PersonES6 = new PersonES6("Daniel");
console.log(PersonES6.name); // >> "Daniel"

// métodos representan acciones
// Antes de ES6
Person.prototype.greet = function () {
  return `Hola, soy ${this.name}`;
};

console.log(person.greet()); // >> "Hola, soy Daniel"

// con ES6

PersonES6.greet(); // >> "Hola, soy Daniel"
