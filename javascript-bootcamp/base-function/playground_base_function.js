// Functions

// Simple function
(function() {
  console.log('----------- Simple function ----------');

  // Function Morphology
  // Fonction ou methode
  // Mot clé function + nom de la fonction + les paramètres et le corps de la fonction
  function multiplication(valeur1, valeur2) {
    return valeur1 * valeur2;
  }

  // Arguments: valeurs passées a la fonction quand elle est appelée.
  console.log('Multiplication: 2 * 8 =', multiplication(2, 8));
})();

// Function is also an object
// Les fonctions et le mot cle new
(function() {
  console.log('----------- Function is also an object ----------');
  const sum = new Function('a', 'b', 'return a + b');
  console.log(sum(2, 6));

  const sayHello = new Function(
    "return function (name) { return `Hello, ${name}` }",
  );
  console.log(sayHello()("Mr Stone!"));

  function patate() {
    return { name: 'je suis une patate' }
  }
  const test = new patate()
  console.log('function with new keyword', test.name)


  function banana() {
    this.name = 'je suis une banane'
  }
  const test2 = new banana()
  console.log('function with new keyword', test2.name)

  // Function properties
  console.log('function name', banana.name)

  // Function methods pour la section js avancée
  // Call method
  // Apply method
  // Bind method
})();

// Parameter by value or by sharing(reference)
(function() {
  console.log('----------- Parameter by value or by reference ----------');
  // By value
  console.log('By value')
  const name = 'Mr Stone'
  function sayHello(value) {
    value += ' Stack'
    return `Hello, ${value}`;
  }
  console.log(sayHello(name))
  console.log('the name', name)

  // By sharing(reference)
  console.log('By sharing(reference)')
  const person = { name: 'Mr Stone' }
  function sayHelloPerson(value) {
    value.name += ' Stack'
    return `Hello, ${value.name}`;
  }
  console.log(sayHelloPerson(person))
  console.log('the name', person.name)

  // Exemple 2
  console.log('By sharing(reference)')
  const person2 = { name: 'Mr Stone' }
  function sayHelloPerson2(value) {
    value = { name: 'Mr Stone Stack' }
    return `Hello, ${value.name}`;
  }
  console.log(sayHelloPerson2(person2))
  console.log('the name', person2.name)
})();

// Function scope
// test in browser
(function() {
  console.log('----------- Function scope ----------');
  const firstname = 'Evens'
  function hello() {
    const lastname = ' Stone'
    console.log('My name is:', firstname, lastname)
  }
  hello()
  console.log('Outside My name is:', firstname, lastname)
})();

// Les expressions de fonction
// The main difference between a function expression and a function declaration is the function name, 
// which can be omitted in function expressions to create anonymous functions
(function() {
  console.log('----------- Les expressions de fonction ----------');
  // function declation
  function squareDeclaration (value) { return value * value }

  // Anonyme
  const square = function (value) { return value * value }
  // Avec un nom, permettant a la fonction de s'auto appeler
  const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); }

  console.log('Square declation', squareDeclaration(2))
  console.log('Square expression', square(2))
  console.log('factorial expression', factorial(6))
})();

// First class function
(function() {
  console.log('----------- First class function ----------');

  function sayHello() {
    return "Hello, ";
  }

  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }

  console.log('Fonction comme argument -> Callback');
  greeting(sayHello, "Mr Stone!");

  // Fonction comme type de retour
  function sayHello2() {
    return (name) => {
      console.log("Hello, ", name);
    };
  }
  console.log('Fonction comme type de retour');
  const test = sayHello2()
  test("Mr Stone!");
})();

// Les differents types de fonction
(function () {
  console.log('----------- Les differents types de fonction ----------');
  // Anonyme
  (function () {
    console.log("Fonction anonyme");
  })();

  // Nommée
  function foo() {
    console.log("Fonction nommée");
  }
  foo();

  // Fonction imbriquée
  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  console.log("Fonction imbriquée, Square:", addSquares(2, 2));

  // Fonction recursive
  function loop(x) {
    if (x >= 10) return;
    console.log("Fonction recursive, Loop:", x);
    loop(x + 1);
  }
  loop(0);

  // IIEF
  (function foo() {
    console.log("IIEF, Hello Mr Stone!");
  })();

  // Flechée
  (() => console.log("Fonction Flechée, hello world"))();
  const test = (name) => {
    console.log("Fonction Flechée, hello world", name)
    console.log("Fonction Flechée, hello world", name, name)
  }
})();

// Encapsulation en Javascript
(function() {
  console.log('----------- Encapsulation en Javascript ----------');
  function Encapsulation() {
    const firstname = 'Jonh'
    const lastname = 'Doe'
    return {
      fullname: `${firstname} ${lastname}`
    }
  }
  // Direct call
  console.log('Encapsulation direct call', Encapsulation().fullname, Encapsulation().firstname);
})();

// Higher order function
(function() {
  console.log('----------- Higher order function ----------');

  function sayHello() {
    return "Hello, ";
  }

  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }

  console.log('Fonction comme argument -> Callback');
  greeting(sayHello, "Mr Stone!");

  // Fonction comme type de retour
  function sayHello2() {
    return (name) => {
      console.log("Hello, ", name);
    };
  }
  console.log('Fonction comme type de retour');
  sayHello2()("Mr Stone!");
})();

// Hoisting
// All function declarations are effectively at the top of the scope
// Note: Function expressions in JavaScript are not hoisted
(function() {
  console.log('----------- Function Hoisting ----------');
  console.log('Square', square(2))
  console.log('factorial', fac(6))
  // console.log('squareExpr', squareExpr(6))

  const squareExpr = function (value) { return value * value }

  function square (value) { return value * value }
  function fac(n) { return n < 2 ? 1 : n * fac(n - 1); }
})();

// Function vs Method
(function() {
  console.log('----------- Function vs Method ----------');
  function square (value) { return value * value }
  const math = {
    square,
    fac: function(n) { return n < 2 ? 1 : n * math.fac(n - 1); }
  }
  console.log('function square', square(6))
  console.log('method square', math.square(6))
  console.log('method fac', math.fac(6))
})();

// Callback 
(function() {
  console.log('----------- Callback Function ----------');
  function square (value) { return value * value }
  const values = [2,4,6,8]
  console.log('Callback function square', values.map(square).join(','))
})();

// Check if function exist
// test in browser
// (function() {
//   console.log('----------- Check if function exist ----------');
//   if (typeof window.square === "function") {
//     console.log('function exists');
//   } else {
//     console.log('function not exists');
//   }
// })();
