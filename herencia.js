// Heredar propiedades y métodos

// Antes de ES6 se llamaba herencia prototipal
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hola, soy ${this.name}`;
};

function Developer(name) {
  this.name = name;
}

Developer.prototype = Object.create(Person.prototype); // hereda las propiedades y métodos de Person

Developer.prototype.writeCode = function () {
  return "Escribiendo código...";
};

var dev = new Developer("Sami");
dev.greet(); // >> "Hola, soy Sami y soy desarrollador" Esto es Heredado de Person
dev.writeCode(); // >> "Escribiendo código..."

// con ES6

class PersonES6 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hola, soy ${this.name}`;
  }
}

class DeveloperES6 extends PersonES6 {
  // extends para heredar propiedades y métodos de PersonES6

  constructor(name) {
    super(name); // super para llamar al constructor de la clase padre
  }
  writeCode(tea) {
    return tea ? "Escribiendo código..." : "Toma té...";
  }
}

const devES = new Developer("Daniel");

devES.greet(); // >> "Hola, soy Daniel"
devES.writeCode(true); // >> "Escribiendo código..."
devES.writeCode(false); // >> "Toma té..."
// Hereda propiedades y métodos de PersonES6
