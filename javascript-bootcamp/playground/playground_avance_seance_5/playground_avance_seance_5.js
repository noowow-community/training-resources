// JS avancé séance 5
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

// Factory function
(() => {
  console.log('---------------- Factory function ------------------');
  // Factory function
  const personFactory = (firstname = 'Evens', lastname = 'Stone') => {
    return {
      firstname,
      _lastname: lastname,
      get lastname() {
        return this._lastname
      },
      set lastname(value) {
        this._lastname = value
      },
      get fullname() {
        return `${this.firstname} ${this._lastname}`
      },
      printFullname() {
        console.log('Person fullname', this.fullname)
      }
    }
  }

  const person1 = personFactory()
  person1.printFullname()
  console.log('Person props', person1.firstname, person1.lastname)
  person1.firstname = 'Jane'
  person1.lastname = 'Doe'
  console.log('Person props changed', person1.firstname, person1.lastname)
  person1.printFullname()
})();

// Constructor function
(() => {
  console.log('---------------- Constructor function ------------------');
  // Constructor function
  function personFactory (firstname = 'Evens', lastname = 'Stone') {
    this.firstname = firstname
    this._lastname = lastname

    this.getLastname = () => this._lastname

    this.setLastname = (value) =>  (this._lastname = value)

    this.getFullname = () => `${this.firstname} ${this._lastname}`

    this.printFullname = () => console.log('Person fullname', this.getFullname())
  }

  const person1 = new personFactory()
  person1.printFullname()
  console.log('Person props', person1.firstname, person1.getLastname())
  person1.firstname = 'Jane'
  person1.setLastname('Doe')
  console.log('Person props changed', person1.firstname, person1.getLastname())
  person1.printFullname()
})();

// Class basic
// Class: template for JS Object
(() => {
  console.log('---------------- Class basic ------------------');
  // Constructor function
  class PersonClass {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this.firstname = firstname;
      this._lastname = lastname;

      this.getLastname = () => this._lastname;

      this.setLastname = (value) => (this._lastname = value);

      this.getFullname = () => `${this.firstname} ${this._lastname}`;

      this.printFullname = () => console.log('Person fullname', this.getFullname());
    }
  }

  const person1 = new PersonClass()
  // A class is a function
  console.log('typeof class', typeof PersonClass)

  person1.printFullname()
  console.log('Person props', person1.firstname, person1.getLastname())
  person1.firstname = 'Jane'
  person1.setLastname('Doe')
  console.log('Person props changed', person1.firstname, person1.getLastname())
  person1.printFullname()
})();

// Class declaration vs Class expression
(() => {
  console.log('---------------- Class declaration ------------------');
  // Class declaration
  class Person {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    get fullname() { // Read only
      return `${this._firstname} ${this.lastname}`
    }

    getFirstname() {
      return this._firstname
    }

    /**
     * @param {string} value
     */
    set firstname(value) {
      this._firstname = value
    }
  }

  // Usage
  const person1 = new Person()
  const person2 = new Person('Jonh', 'Doe')
  console.log('Class declaration default parameter fullname', person1.fullname)
  console.log('Class declaration user argument fullname', person2.fullname)
  person2.firstname = 'Jane'
  console.log('Class declaration user argument fullname', person2.fullname)

  console.log('---------------- Class expression ------------------');
  // Class expression
  const personExpr = class {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    get fullname() {
      return `${this._firstname} ${this.lastname}`
    }

    getFirstname() {
      return this._firstname
    }

    /**
     * @param {string} value
     */
    set firstname(value) {
      this._firstname = value
    }
  }

  class PrintPerson {
    constructor(personClass) {
      this._person = new personClass('Jane', 'Doe')
    }

    printFullname() {
      console.log('Print person fullname', this._person.fullname)
      return this
    }

    printLastname() {
      console.log('Print person lastname', this._person.lastname)
      return this
    }

    printFirstname() {
      console.log('Print person firstname', this._person.getFirstname())
      return this
    }
  }

  // Usage
  const personPrint = new PrintPerson(personExpr)
  // Chainable pattern
  personPrint
    .printFullname()
    .printLastname()
    .printFirstname()
})();

// Class Inheritance
(() => {
  console.log('---------------- Class Inheritance ------------------');
  // Class declaration
  class Person {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    get fullname() {
      return `${this._firstname} ${this.lastname}`
    }

    getFirstname() {
      return this._firstname
    }

    /**
     * @param {string} value
     */
    set firstname(value) {
      this._firstname = value
    }

    printInfos() {
      console.log('User infos', this.fullname);
    }
  }

  // Can we define many constructors in JS?
  // Answer: No
  // class PersonExemple {
  //   constructor(name) {
  //     this.name = name
  //   }

  //   constructor(name, age) {
  //     this.name = name
  //     this.age = age
  //   }

  //   printInfos() {
  //     console.log('User infos', this.name, this.age);
  //   }
  // }
  // const pers = new PersonExemple('Patate')
  // pers.printInfos()
  // const pers2 = new PersonExemple('Patate', 21)
  // pers2.printInfos()

  class Developer extends Person {
    constructor(firstname = 'Evens', lastname = 'Stone', languages = ['Javascript', 'HTML', 'CSS']) {
      super(firstname, lastname) // Super mandatory
      this._languages = languages
    }

    printInfos() {
      console.log('Dev infos', this.fullname, this._languages.join(' - '));
    }
  }

  // Usage
  const person1 = new Person()
  const dev1 = new Developer()
  person1.printInfos()
  dev1.printInfos()
})();

// Static properties and methods
(() => {
  console.log('---------------- Static properties and methods ------------------');
  // Class declaration
  class Person {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    get fullname() {
      return `${this._firstname} ${this.lastname}`
    }

    getFirstname() {
      return this._firstname
    }

    set firstname(value) {
      this._firstname = value
    }

    static isEqual(person1, person2) {
      return person1.fullname === person2.fullname
    }
  }

  class Developer extends Person {
    constructor(firstname = 'Evens', lastname = 'Stone', languages = ['Javascript', 'HTML', 'CSS']) {
      super(firstname, lastname)
      this._languages = languages
    }

    static isEqual(person1, person2) {
      return super.isEqual(person1, person2) && person1._languages.join('-') === person2._languages.join('-')
    }
  }

  // Examples
  const person1 = new Person()
  const person2 = new Person()
  const person3 = new Person('Jan', 'Doe')
  console.log('is equal', Person.isEqual(person1, person2))
  console.log('is equal', Person.isEqual(person1, person3))

  const dev1 = new Developer()
  const dev2 = new Developer()
  const dev3 = new Developer('Evens', 'Stone', ['Javascript', 'HTML'])
  console.log('is equal', Developer.isEqual(dev1, dev2))
  console.log('is equal', Developer.isEqual(dev1, dev3))
})();

// Class Fields
// Protected and private properties and methods
(() => {
  console.log('---------------- protected and private properties and methods ------------------');
  // Class declaration
  class Person {
    nationality = 'Haitian'
    _gender = 'male'
    #age = 100
    #height = 1.80

    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    _getFullname() {
      return `${this._firstname} ${this.lastname}`
    }

    get age() { // Readonly
      return this.#age
    }

    #getAllUserInfos() {
      return `${this._getFullname()}, ${this.nationality}, ${this._gender}, ${this.age}, ${this.#height}`
    }

    printInfos() {
      console.log('user infos', this.#getAllUserInfos())
    }
  }

  class Developer extends Person {
    #languages = []
    constructor(firstname = 'Evens', lastname = 'Stone', languages = ['Javascript', 'HTML', 'CSS']) {
      super(firstname, lastname)
      this.#languages = languages
    }

    getHeight() {
      // return super.#height
    }

    printInfos() {
      super.printInfos()
      console.log('Dev infos', this.#languages.join(' - '))
    }
  }

  // Usage
  const person1 = new Person()
  const dev1 = new Developer()

  person1.printInfos()
  dev1.printInfos()

  // Access protected and private attribs
  console.log('Protected parent gender', dev1.gender)
  console.log('Protected parent gender', dev1._gender)

  // console.log('private height', person1.#height) // A verifier
  console.log('private parent height', dev1.getHeight())
})();

// Extending built-in classes
(() => {
  console.log('---------------- Extending built-in classes ------------------');
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log('Array isEmpty', arr.isEmpty()); // false
  
  let filteredArr = arr.filter(item => item >= 10);
  console.log('Array', filteredArr); // 10, 50
  console.log('Array isEmpty', filteredArr.isEmpty()); // false
})();

// Class checking: "instanceof"
(() => {
  console.log('---------------- Class checking: "instanceof" ------------------');
  class Person {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    get fullname() {
      return `${this._firstname} ${this.lastname}`
    }

    getFirstname() {
      return this._firstname
    }

    set firstname(value) {
      this._firstname = value
    }

    static isEqual(person1, person2) {
      return person1.fullname === person2.fullname
    }
  }

  class Developer extends Person {
    constructor(firstname = 'Evens', lastname = 'Stone', languages = ['Javascript', 'HTML', 'CSS']) {
      super(firstname, lastname)
      this._languages = languages
    }

    static isEqual(person1, person2) {
      return super.isEqual(person1, person2) && person1._languages.join('-') === person2._languages.join('-')
    }
  }

  // Built-in object
  // const arr = [1, 2, 3];
  // console.log('is arr an Array?', arr instanceof Array)
  // console.log('is arr an Object?', arr instanceof Object)

  const person1 = new Person()
  const dev1 = new Developer()
  const dev2 = new Developer()

  dev2.__proto__ = {}

  console.log('Is person1 a Person?', person1 instanceof Person)
  console.log('Is dev1 a Developer?', dev1 instanceof Developer)
  console.log('Is dev1 a Person?', dev1 instanceof Person)
  console.log('Is person1 a Developer?', person1 instanceof Developer)
  console.log('Is dev2 a Developer?', dev2 instanceof Developer)
  console.log('Is dev2 a Person?', dev2 instanceof Person)
})();

// Mixins: is a class containing methods that can be used by other classes without a need to inherit from it
// Like Trait in PHP
(() => {
  console.log('---------------- Mixins ------------------');
  let sayHiMixin = {
    sayHi() {
      console.log(`Hello ${this.fullname}`);
    },
    sayBye() {
      console.log(`Bye ${this.fullname}`);
    }
  };
  
  class Person {
    constructor(firstname = 'Evens', lastname = 'Stone') {
      this._firstname = firstname
      this.lastname = lastname
    }

    get fullname() {
      return `${this._firstname} ${this.lastname}`
    }

    getFirstname() {
      return this._firstname
    }

    set firstname(value) {
      this._firstname = value
    }

    static isEqual(person1, person2) {
      return person1.fullname === person2.fullname
    }
  }
  
  // copy the methods
  Object.assign(Person.prototype, sayHiMixin);
  
  // now User can say hi
  const person1 = new Person()
  person1.sayHi()
  person1.sayBye()
})();
