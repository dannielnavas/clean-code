// arrow functions  son útiles para definir funciones lambda que son funciones de una linea, que son excelentes para mejorar la expresividad e intencionalidad de las funciones.
// Introducidas en ES61

const getResults = () => "Results";

console.log(getResults()); // >> 'Results'

// Arrow cambia el comportamiento de this

// queda asociado al this del ámbito de la función

const counter = {
  number: 0,
  increment() {
    setInterval(() => {
      console.log(++this.number);
    }, 1000);
  },
};

counter.increment(); // >> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...

// tradicional con function

const counterFunction = {
  number: 0,
  increment() {
    setInterval(function () {
      console.log(++this.number);
    }, 1000);
  },
};

counterFunction.increment(); // >> NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, ...

// dentro de la función de setInterval perdió la referencia al number de counterFunction

// se soluciona con el bind

const counterBind = {
  number: 0,
  increment() {
    setInterval(
      function () {
        console.log(++this.number);
      }.bind(this),
      1000
    );
  },
};

counterBind.increment(); // >> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...
