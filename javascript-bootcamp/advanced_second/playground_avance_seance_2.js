// JS avancé séance 2
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

// Rest parameters
// Allows a function to accept an indefinite number of arguments as an array
// A function definition can only have one rest parameter, 
// and the rest parameter must be the last parameter in the function definition.
(function() {
  console.log('----------- Rest parameters -----------');

  // Wrong way
  // function wrong1(...one, ...wrong) {}

  // Single params
  function myFun(...manyMoreArgs) {
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");

  // With other parameters
  const multiply = (multiplier, ...theArgs) => theArgs.map((element) => multiplier * element)
  console.log(multiply(2, 15, 25, 42));

})();

// Spread syntax / syntaxe de décomposition
// Permet de decomposer un iterable(array, string) et un objet litteral
// spread syntax is the opposite of rest syntax
// Spread syntax "expands" an array into its elements, 
// while rest syntax collects multiple elements and "condenses" them into a single element
// Can be use in three places (function args, array literal and object literal)
(function() {
  console.log('----------- Spread syntax -----------');

  // Array can be spread into object
  // But object cannot be spread into array
  (function() {
    const obj = { key1: "value1" };
    const array = [...obj]; // Error

    const array2 = [1, 2, 3];
    const obj2 = { ...array };
  })();

  // Spread in function calls
  (function() {
    // replace apply when invoking func with array as args list
    function myFunction(x, y, z) { console.log('func call', x, y, z); }
    const args = [0, 1, 2];
    myFunction.apply(null, args); // apply
    myFunction(...args); // Spread

    // Unlike rest syntax
    // spread syntax can be used multiple times.
    function myFunction2(...args) { console.log(args); }
    const args2 = [0, 1];
    myFunction2(-1, ...args2, 2, ...[3]);
  })();

  // Spread in array literals
  (function() {
    // Array merge
    const parts = ["shoulders", "knees"];
    const lyrics = ["head", ...parts, "and", "toes"];
    console.log(lyrics);
    
    // Shallow Clone array
    // No native operation in JavaScript does a deep clone
    // Deep clone is posible only with JSON.stringify and JSON.parse
    const arr = [1, 2, 3];
    const arr2 = [...arr]; // like arr.slice()
    arr2.push(4);
    console.log(arr, arr2);

    // concatenate arrays
    let arr3 = [0, 1, 2];
    const arr4 = [3, 4, 5];
    arr3 = [...arr3, ...arr4];
    console.log(arr3, arr4);
  })();

  // Spread in object literals
  // Spread do not mutate any object it return a new instance
  // Note that Object.assign() can be used to mutate an object, whereas spread syntax can't.
  (function() {
    const obj1 = { foo: "bar", x: 42 };
    const obj2 = { foo: "baz", y: 13 };
    // Shallow-cloning
    const clonedObj = { ...obj1 };
    // Merging
    const mergedObj = { ...obj1, ...obj2 };
    console.log(clonedObj, mergedObj);

    const obj12 = { foo: "bar", x: 42 };
    Object.assign(obj12, { x: 1337 });
    console.log(obj12);
  })();

})();

// Destructuring assignment / Affectation par décomposition
// Permet d'extraire les valeurs des tableaux et objets dans des variables distinct
(function() {
  console.log('----------- Destructuring assignment -----------');
  // Array Destructuring
  (function() {
    const [a,b] = [1,2,3,4]
    console.log('Array a & b', a, b)
  })();

  // Object Destructuring
  (function() {
    const { a, b } = { a: 23, b: 30 }
    console.log('Object c & d', a, b)
  })();

  // Binding pattern vs assignment pattern
  (function() {
    // Binding
    const [a] = [1,2,3,4]
    const { b } = { a: 1, b: 2 }
    console.log('Binding pattern', a, b)
    // assignment
    let c, d;
    [c] = [3,4,5]
    ({ a: d } = { a: 1, d: 2 })
    console.log('assignment pattern', c, d)
  })();

  // Default value
  (function() {
    const [a = 1] = []; // a is 1
    const { b = 2 } = { b: undefined }; // b is 2
    const { c = 2 } = { c: null }; // c is null
    console.log('Default value', a, b, c)
    const { d = console.log("hey") } = { b: 2 };
    d
    const { e = () => console.log("hey arrow") } = { b: 2 };
    e()
  })();

  // Rest property
  // The rest property must be the last in the pattern, and must not have a trailing comma.
  (function() {
    const { a, ...others } = { a: 1, b: 2, c: 3 };
    console.log(a, others); // { b: 2, c: 3 }
    const [first, ...others2] = [1, 2, 3];
    console.log(first, others2); // [2, 3]
  })();

  // Ignoring some returned values
  (function() {
    const [a, ,b] = (() => [1, 2, 3])()
    console.log('Ignoring', a, b); // 1
  })();

  // Assigning to new variable names, with default values
  (function() {
    const o = { p: 42, q: true };
    const { p: foo, q: bar } = o;
    console.log(foo); // 42
    console.log(bar); // true
    const { a: aa = 10, b: bb = 5 } = { a: 3 };
    console.log(aa); // 3
    console.log(bb); // 5
  })();

  // Unpacking properties from objects passed as a function parameter, with default params
  (function() {
    (({ a, b, z = 23 }) => console.log('func params', a, b, z))({ a: 2, b: 3, c: 4 })
  })();

  // Combined array and object destructuring
  (function() {
    const props = [
      { id: 1, name: "Fizz" },
      { id: 2, name: "Buzz" },
      { id: 3, name: "FizzBuzz" },
    ];
    const [, , { name }] = props;
    console.log(name, props[2].name);
  })();

})();

// Default parameter
(function() {
  console.log('----------- Default parameter -----------');

  // Passing undefined vs. other falsy values
  (function() {
    function test(num = 1) {
      console.log(typeof num);
    }
    
    test(); // 'number' (num is set to 1)
    test(undefined); // 'number' (num is set to 1 too)
    
    // test with other falsy values:
    test(""); // 'string' (num is set to '')
    test(null);
  })();

  // Evaluated at call time
  (function() {
    function callSomething(thing = something()) {
      return thing;
    }
    
    let numberOfTimesCalled = 0;
    function something() {
      numberOfTimesCalled += 1;
      return numberOfTimesCalled;
    }
    
    callSomething(); // 1
    callSomething(); // 2
  })();

  // Earlier parameters are available to later default parameters
  (function() {
    function greet(name, greeting, message = `${greeting} ${name}`) {
      return [name, greeting, message];
    }
    
    greet("Stone", "Hi");
    greet("Stone", "Hi", "Happy Birthday!");
  })();

  // Destructured parameter with default value assignment
  (function() {
    function preFilledArray([x = 1, y = 2] = []) {
      console.log(x + y);
    }
    
    preFilledArray(); // 3
    preFilledArray([]); // 3
    preFilledArray([2]); // 4
    preFilledArray([2, 3]); // 5
    
    // Works the same for objects:
    function preFilledObject({ z = 3 } = {}) {
      console.log(z);
    }
    
    preFilledObject(); // 3
    preFilledObject({}); // 3
    preFilledObject({ z: 2 }); // 2
  })();

})();

// Shallow cloning vs Deep cloning
(function() {
  console.log('----------- Shallow cloning vs Deep cloning -----------');
  // Fake copy
  (function() {
    const originalArray = [1,2,3]
    const originalObject = { name: 'Mr Stone' }
    
    const copyArray = originalArray
    const copyObject = originalObject
    copyArray.push(4)
    copyObject.gender = 'Male'
    console.log('False copy array', originalArray, copyArray);
    console.log('False copy object', originalObject, copyObject);
  })();

  // Shallow cloning
  (function() {
    const originalArray = [1,2,3,[4,5]]
    const originalObject = { name: 'Mr Stone', address: { city: 'Carrefour' } }
    
    const copyArray = [ ...originalArray ]
    const copyObject = { ...originalObject }
    copyArray.push(4)
    copyArray[3].push(4)
    copyObject.gender = 'Male'
    copyObject.address.city = 'Miragoane'
    console.log('Shallow copy array', originalArray, copyArray);
    console.log('Shallow copy object', originalObject, copyObject);
  })();

  // Deep cloning
  (function() {
    const originalArray = [1,2,3,[4,5]]
    const originalObject = { name: 'Mr Stone', address: { city: 'Carrefour' } }
    
    const copyArray = JSON.parse(JSON.stringify(originalArray))
    const copyObject = JSON.parse(JSON.stringify(originalObject))
    copyArray.push(4)
    copyArray[3].push(4)
    copyObject.gender = 'Male'
    copyObject.address.city = 'Miragoane'
    console.log('Deep copy array', originalArray, copyArray);
    console.log('Deep copy object', originalObject, copyObject);
  })();
})();

// Objects - Shorthand object properties
// Use var as key and value at same time
(function() {
  console.log('----------- Objects - Shorthand object properties -----------');
  // Traditional
  function getUser (name, gender, birth) {
    return {
      name: name,
      gender: gender,
      birthday: birth,
      timestamp: Date.now()
    }
  }

  // Shorthand
  function getUser2 (name, gender, birth) {
    return {
      name,
      gender,
      birthday: birth,
      timestamp: Date.now()
    }
  }

  console.log('Before', getUser('Mr Stone', 'male', 'June 26'));
  console.log('After', getUser2('Mr Stone', 'male', 'June 26'));
})();

// Objects - Computed properties
// expression in brackets [] as property name
(function() {
  console.log('----------- Objects - Computed properties -----------');
  let i = 0;
  const a = {
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
  };

  console.log(a['foo1']); // 1
  console.log(a.foo2); // 2
  console.log(a.foo3); // 3
})();

// Objects - Method shorthand syntax && concise method syntax && (space in method name)
// Concise methods can utilize the super keyword and the non-concise (aka: traditional) methods cannot.
(function() {
  console.log('----------- Objects - Method shorthand syntax && concise method syntax && (space in method name) -----------');
  // Traditional
  function getUser (name, gender, birth) {
    return {
      name: name,
      gender: gender,
      birthday: birth,
      timestamp: Date.now(),
      getName: function() { return this.name },
      setName: function(v) { this.name = v },
      'get name and gender': function() { return `${this.name} ${this.gender}` }, // space in method name
    }
  }

  // Shorthand
  function getUser2 (name, gender, birth) {
    return {
      name,
      gender,
      birthday: birth,
      timestamp: Date.now(),
      getName() { return this.name },
      setName(v) { this.name = v },
      'get name and gender'() { return `${this.name} ${this.gender}` }, // space in method name
    }
  }

  console.log('Before', getUser('Mr Stone', 'male', 'June 26'));
  console.log('After', getUser2('Mr Stone', 'male', 'June 26'));

  // Concise vs non-concise
  // Super to point object's prototype(parent)
  const animal = {
    getname() {
      return 'Animal'
    }
  }
  // Non-concise
  const dog = {
    getname: function() {
      return `${super.getname()} - Dog`
    }
  }
  Object.setPrototypeOf(dog, animal)

  // Concise
  // Polymorphisme
  const cat = {
    getname() {
      return `${super.getname()} - Cat`
    }
  }
  Object.setPrototypeOf(cat, animal)
  
  console.log('base object -> ', animal.getname())
  console.log('Non-concise -> ', dog.getname())
  console.log('Concise -> ', cat.getname())
})();

// Arrow function
// Implicit return
// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.
(function() {
  console.log('----------- Arrow function -----------');
  const args = () => {
    console.log('arguments', arguments)
  }
  // Arrow func constructor vs traditional func constructor
  const asConstructor = (name) => {
    this.name = name
  }
  const name = new asConstructor('Stone')
  
  // Arrow func as method vs traditional func as method
  const method = {
    name: 'Stone',
    printName: () => console.log('Print name arrow func', this.name, this),
    printName2: function() { console.log('Print name trad func', this.name, this) }
  }

  // Rest parameters
  const restParam = (a, b, ...r) => console.log('Rest parameters', r)
  
  // default parameters
  const defaultParam = (a = 400, b = 20, c) => console.log('Default parameters', a, b, c)

  // destructuring params
  const destructuringArray = ([a, b] = [10, 20]) => console.log('Destructuring', a, b)
  const destructuringObj = ({ a, b } = { a: 10, b: 20 }) => console.log('Destructuring', a, b)

  // Explicit return and block body
  const explicitOne = (a, b) => {
    const op = 1
    return a + b + 100 + op
  }

  // Implicit return and concise body
  const implicitOne = (a, b) => a + b + 100
  const implicitTwo = v => v + 100
  const implicitThree = () => 100

  // Implicit return literal object
  const implicitFour = () => { name: 'Stone' }
})();
