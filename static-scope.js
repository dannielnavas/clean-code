const age = 34;

function printAge() {
  console.log(`La edad es ${age}`);
}

function mainApp() {
  const age = 25;
  printAge();
}

mainApp(); // >> La edad es 34

// el comportamiento de javascript es estático por lo que el valor de la variable age que se imprime es 34 y no 25
// porque la función printAge() está accediendo a la variable age que está en el ámbito global y no a la que está en el ámbito local de la función mainApp().
// En JavaScript, el ámbito de una variable se determina en tiempo de compilación y no en tiempo de ejecución. Por eso, el valor de la variable age que se imprime es 34 y no 25.
