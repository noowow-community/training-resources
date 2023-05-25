// JS avancé
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

// This keyword intro
(function() {
  console.log('----------- JS this scope ----------');
  // This is created when body function is evaluated
  function getThisPatate() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThisPatate;
  obj2.getThis = getThisPatate;

  obj1.patate = 'banane'
  
  console.log(obj1.getThis());
  console.log(obj2.getThis());
  console.log(obj1.patate);

  // This in array function
  const arrowFuncGetThis = () => this
  
  obj1.getThisArrow = arrowFuncGetThis;
  obj2.getThisArrow = arrowFuncGetThis;
  
  console.log(obj1.getThisArrow());
  console.log(obj2.getThisArrow());
})();

// Function avancée
(function() {
  console.log('----------- Function avancée ----------');

  // Function called by constructor
  // A constructor is a special function that creates and initializes an object instance of a class. 
  // In JavaScript, a constructor gets called when an object is created using the new keyword.
  // The purpose of a constructor is to create a new object and set values for any existing object properties
  // It's purpose is to create a new object and hydrate it
  // -----------
  // When a constructor gets invoked in JavaScript
  // A new empty object gets created.
  // The this keyword begins to refer to the new object and it becomes the current instance object.
  // The new object is then returned as the return value of the constructor.
  // Function called by constructor
  // This in object scope
  function Person(name) {
    this.name = name
  }
  const person1 = new Person('Mr Stone')
  console.log('Person', JSON.stringify(person1))
  console.log('this.name', this.name)

  // Function called as plain function
  // This scope global
  console.log('Person', Person('Mr Stone'))
  console.log('Person', Person.apply(null, 'Mr Stone'))
  console.log('this.name', this.name)


  // Because this in a function is called in the object it was called or in the global scope
  // Now, how to call a function in an object scope
  // Use apply, call, bind, for function in object scope
  function Animal() {
    this.name = ''
  }
  const animalLiteral = { name: 'chien' }
  // Apply method with this
  console.log('Animal', Animal.apply(animalLiteral))
  console.log('this.name', this.name)

  // Apply vs call
  // No args
  function printNames() {
    // Arguments object
    Array.from(arguments).forEach(v => console.log(this.funcType, ' valeurs: ', v));
  }
  this.funcType = 'normal call'
  printNames('Stone', 'Evens', 'Jane', 'Jonh')
  const callObj = { funcType: 'Function with call()' }
  printNames.call(callObj, 'Stone', 'Evens', 'Jane', 'Jonh')
  // You can use apply to pass array as argument to any function
  printNames.apply({ funcType: 'Function with apply()' }, ['Stone', 'Evens', 'Jane', 'Jonh'])

  // Push example
  const apply1 = ['a', 'b']
  const apply2 = ['c', 'd']
  apply1.push(apply2)
  console.log('Push with array as argument', apply1)
  apply1.push.apply(apply1, apply2)
  console.log('Push and apply with array as argument', apply1)

  // Bind
  // Create a new function with provided this context
  const bind1 = {
    name: 'Binding one',
    getName: function() {
      return this.name
    }
  }
  const bind2 = {
    name: 'Binding two',
    getName: function() {
      return this.name
    },
    setName: function(name) {
      this.name = name
    },
  }
  const bind1WithBind2 = bind1.getName.bind(bind2)
  const bind2WithBind1 = bind2.getName.bind(bind1)
  console.log('Binding one with binding two object -> ', bind1WithBind2())
  console.log('Binding two with binding one object -> ', bind2WithBind1())


  // Constructor vs object litteral
  // Constructor useful for creating multiple objects
  // object litteral useful for creating single object
  console.log('********* Constructor vs object litteral *********');
  function User(name, gender) {
    this.name = name
    this.gender = gender
  }
  // Constructor
  const user1 = new User('Mr Stone', 'male')
  const user2 = new User('Jane', 'female')
  // object litteral
  const user3 = {
    name: 'Jonh',
    gender: 'male'
  }
  console.log(user1, user2, user3);


  // Instance vs Prototype
  // Object prototype: Properties and methods can be added to a constructor using a prototype
  User.prototype.age = 12
  console.log(user1, user2, user3);
  user3.age = 25
  console.log(user1, user2, user3);


  // Closure
  // A closure is the combination of a function and the lexical environment within which that function was declared
  function makeFunc() {
    const name = "Stone";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


  // Built-in Constructors and primitive
  const a = new Object();

  const b = new String();
  const c = new String('Bob')

  const d = new Number();
  const e = new Number(25);

  const f = new Boolean();
  const g = new Boolean(true);
  // NB: Strings, numbers and booleans should not be declared as objects since they hinder performance.
})();

// String methods and props
(function() {
  console.log('----------- Sting methods and props ----------');
  console.log('length', ' stone '.length)
  console.log('trim', ' stone '.trim())
  console.log('indexOf', ' stone '.indexOf('t'), ' stone '.indexOf('x'))
  console.log('includes', ' stone '.includes('tone'), ' stone '.includes('tonex'))
  console.log('Split', 'MR stone'.split(' '))
  console.log('UPPER CASE', 'MR stone'.toUpperCase())
  console.log('lower case', 'MR STONE'.toLowerCase())
  console.log('concat', 'Mr'.concat(' Stone'))
  console.log('slice', 'Mr stone'.slice(0, 4))
  console.log('replace', 'Mr Doe Doe'.replace('Doe', 'Stone'))
  console.log('replaceAll', 'Mr Doe Doe'.replaceAll('Doe', 'Stone'))
})();

// Type casting
(function() {
  console.log('----------- Type casting ----------');
  // String to number
  console.log('string to number', Number('98'))
  console.log('string to number', Number('98.78'))
  console.log('string to number', Number('98 09'))
  console.log('string to number', Number('Stone')) // NAN
  console.log('string to number with parseInt', parseInt('98.78'))
  console.log('float to int with parseInt', parseInt(101.23))
  console.log('string to number with parseFlat', parseFloat('98.78'))
  console.log('number to string', String(98))
  console.log('number to string', Number(98).toString())
  console.log('boolean to string', String(true), true.toString(), String(false), false.toString())

  // Other usefull methods
  console.log('toFixed', Number(34.23000).toFixed(2))
  console.log('toPrecision', Number(44.2398988).toPrecision(6))
  console.log('isInteger', Number.isInteger(12))
  console.log('isInteger', Number.isInteger('12'))
})();

// Array methods and props
(function() {
  console.log('----------- Array methods and props ----------');
  console.log('length', [12,3,4,5].length)
  // concat
  console.log('concat', [1,2,3,4].concat([5,6,7,8])) // return new array
  const mutateArray = [1,2,3,4]
  // Push -> insert at the end
  mutateArray.push(5,6,7,8) // Mutate array
  console.log('push', mutateArray)
  // Pop -> remove from the end
  mutateArray.pop()
  console.log('pop', mutateArray)
  // unshift -> insert to the begining
  mutateArray.unshift(-1, 0) // Mutate array
  console.log('unshift', mutateArray)
  // shift -> remove from the begining
  mutateArray.shift()
  console.log('shift', mutateArray)
  // Includes
  console.log('includes', mutateArray.includes(3))
  // indexOf
  console.log('indexOf', mutateArray.indexOf(3), mutateArray.indexOf(30))
  // reverse
  console.log('reverse', mutateArray.reverse(), mutateArray.reverse()) // Mutate array
  // join
  console.log('join', mutateArray.join('-'))
  // slice
  console.log('slice', mutateArray.slice(2, 4)) // shallow copy a portion of an array
  console.log('slice', mutateArray.slice(-2))
  console.log('slice', mutateArray.slice().pop(), mutateArray) // Clone array
  // splice
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');  // mutate array
  console.log('splice', months)
  months.splice(4, 1, 'May');  // mutate array
  console.log('splice', months)
  // Sort
  months.sort() // mutate array
  console.log('sort', months)

  // Palindrome exemple
  // kayak, civic, Was it a car or a cat I saw
  const isPalindrome = function(value) {
    return value.split('').reverse().join('') === value
  }
  console.log('isPalindrome', isPalindrome('kayak'))
})();

// loose equality == vs strict equality === vs Object.is()
(function() {
  console.log('----------- == vs === vs Object.is() ----------');
  console.log('==', 1 == '1')
  console.log('===', 1 === '1')
  console.log('===', 1 === 1)
  console.log('Object.is', Object.is(1, '1'))
  console.log('Object.is', Object.is(1, 1))
  console.log('Object.is', Object.is(1, 2))
})();

// Array and object equality
(function() {
  console.log('----------- Array and object equality ----------');
  console.log('==', 1 == ['1'])
  console.log('===', 1 === ['1'])
  console.log('===', 1 === [1])
  console.log('==', [1] == [1])
  console.log('===', [1] === [1])
  console.log('array toString', [1,2,3].toString() === [1,2,3].toString())
  console.log('array JSON.stringify', JSON.stringify([1,2,3]) === JSON.stringify([1,2,3]))
  // Object
  console.log('object', { name: 'Stone' } === { name: 'Stone' })
  console.log('object toString', { name: 'Stone' }.toString() === { name: 'Stone' }.toString())
  console.log('object JSON.stringify', JSON.stringify({ name: 'Stone' }) === JSON.stringify({ name: 'Stone' }))
})();

// Imperative vs declarative programming
// Imperative: HOW the program should do something by explicitly specifying each instruction (or statement) step by step, which mutate the program's state
// Declarative programming is a paradigm describing WHAT the program does, without explicitly specifying its control flow
(function() {
  console.log('----------- Imperative vs declarative programming ----------');
  // Imperative
  const notes = [1,2,3,4,5];
  // by two
  for (let i = 0; i < notes.length; i++) {
    notes[i] = notes[i] * 2
  }
  console.log('By two imperative array', notes)
  for (const val of notes) {
    console.log('By two imperative item', val)
  }

  // Declarative
  [1,2,3,4,5].map(v => v * 2).forEach(v => console.log('By two declarative item', v))
})();

// Functions on collection of data
// Not mutable
(function() {
  // forEach
  [1,2,3,4,5].forEach(v => console.log('item', v))
  // map
  [1,2,3,4,5].map(v => v * 2).forEach(v => console.log('item', v))
  // filter
  [1,2,3,4,5].filter(v => (v % 2) === 0).forEach(v => console.log('item', v))
  // find
  console.log('item', [1,2,3,4,5].find(v => v == 2))
  // every
  console.log('item', [1,2,3,4,5].every(v => v < 6))
  // some
  console.log('item', [1,2,3,4,5].some(v => (v % 2) === 0))
  // reduce
  console.log('item', [1,2,3,4,5].reduce((accumulator, currentValue) => accumulator + currentValue, 0))
  // Chaining
  const chain = [1,2,3,4,5]
    .map(v => v * 2)
    .filter(v => (v % 2) === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log('item', chain)
})();
