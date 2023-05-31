// JS avancé séance 3
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

// Synchronous execution
function synchronousExecution() {
  console.log('----------- Synchronous execution -----------');
  alert('First statement')
  console.log('Second statement')
  alert('Third statement')
  console.log('fourth statement')
  alert('Last statement')
  console.log('no more statements')
}

// Execution context
// Call stack simple
function executionContext() {
  console.log('----------- Execution context -----------');
  function context1() {
    const value = 'Je suis context 1'
    const value1 = 'Je suis une variable locale du context 1'
    console.log(value)
    console.log(value1)
  }

  function context2() {
    const value = 'Je suis context 2'
    const value2 = 'Je suis une variable locale du context 2'
    console.log(value)
    console.log(value2)
  }

  function context3() {
    const value = 'Je suis context 3'
    const value3 = 'Je suis une variable locale du context 3'
    console.log(value)
    console.log(value3)
  }

  const value = 'Je suis le context parent'
  console.log(value)
  
  context1()
  context2()
  context3()
}

// Call stack complex
function callStackComplex() {
  console.log('----------- Call stack complex -----------');

  function context1() {
    context3()
    const value = 'Je suis context 1'
    const value1 = 'Je suis une variable locale du context 1'
    console.log(value)
    console.log(value1)
  }

  function context2() {
    const value = 'Je suis context 2'
    const value2 = 'Je suis une variable locale du context 2'
    console.log(value)
    console.log(value2)
  }

  function context3() {
    context2()
    const value = 'Je suis context 3'
    console.log(value)
    const value3 = 'Je suis une variable locale du context 3'
    console.log(value)
    console.log(value3)
  }

  const value = 'Je suis le context parent'
  console.log(value)
  
  context1()
}

// Asynchronous execution
function asynchronousExecution() {
  console.log('----------- Asynchronous execution -----------');

  // Browser api event
  document.querySelector('#testBtn').addEventListener('click', () => {
    console.log('Browser api event')
  })

  // Web API function
  setTimeout(() => {
    console.log('Web API delay function provided by the browser')
  }, 0)

  // Native JS asynchronous
  const promise = Promise.resolve('Promise real native JS async operation')

  // Synchronous function
  const syncFunc = () => {
    console.log('Sync function')
  }

  // document.querySelector('#testBtn').dispatchEvent(new Event('click')) // Browser api event Prority
  promise.then(v => {
    console.log(v)
  })

  syncFunc()
  document.querySelector('#testBtn').dispatchEvent(new Event('click'))
}

// Callback
function callbackSimple() {
  console.log('----------- Callback -----------');

  function context1() {
    const value = 'Je suis context 1'
    const value1 = 'Je suis une variable locale du context 1'
    console.log(value)
    console.log(value1)
  }

  function context2() {
    const value = 'Je suis context 2 dans un callback'
    const value2 = 'Je suis une variable locale du context 2'
    console.log(value)
    console.log(value2)
  }

  function context3() {
    const value = 'Je suis context 3'
    const value3 = 'Je suis une variable locale du context 3'
    console.log(value)
    console.log(value3)
  }

  const value = 'Je suis le context parent'

  console.log(value)
  setTimeout(context2, 0)
  context1()
  context3()
}

// Promise simple
function promiseSimple() {
  console.log('----------- Promise simple -----------');

  // Simple promise
  const simple = new Promise((resolve, _reject) => {
    resolve('Hi! Mr Stone')
  })
  simple.then(v => console.log('simple resolved promise', v))
    .catch(e => console.log('simple rejected promise', e))

  const simpleRjected = new Promise((_resolve, reject) => {
    reject('Hi! Mr Stone')
  })
  simple.then(v => console.log('simple resolved promise', v))
    .catch(e => console.log('simple rejected promise', e))

  // Resolved promise
  Promise.resolve(45).then(v => console.log('resolved promise', v))
    .finally(() => console.log('settled promise'))

  // Rejected promise
  Promise.reject(new Error('Plaaahhhh')).catch(e => console.log('rejected promise', e))
    .finally(() => console.log('settled promise'))
}

// Async await
function asyncAwaitFunc() {

  console.log('----------- Async await -----------');

  function delay(sec) {
    return new Promise((res, rej) => {
      setTimeout(res, (sec * 1000), `My delay message after ${sec} secs`)
    })
  }

  async function printDelayMessage() {
    context2()
    const msg = await delay(5)
    console.log(msg)
    context3()
  }

  function context1() {
    const value = 'Je suis context 1'
    const value1 = 'Je suis une variable locale du context 1'
    console.log(value)
    console.log(value1)
  }

  function context2() {
    context1()
    const value = 'Je suis context 2'
    const value2 = 'Je suis une variable locale du context 2'
    console.log(value)
    console.log(value2)
  }

  function context3() {
    const value = 'Je suis context 3'
    console.log(value)
    const value3 = 'Je suis une variable locale du context 3'
    console.log(value)
    console.log(value3)
  }

  const value = 'Je suis le context parent'
  console.log(value)
  
  printDelayMessage().then(() => console.log('Async finished'))

  // document.querySelector('#testBtn').addEventListener('click', () => console.log('Button event'))

  // Handling error
  (async () => {
    try {
      const val = await Promise.reject(new Error(('This is my custom error')))
      // const val = await new Promise((resolve, reject) => reject(new Error('This is my custom error')))
      console.log(val)
    } catch (error) {
      console.log(error)
    }
  })();
}
