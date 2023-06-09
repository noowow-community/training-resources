# How to run the Demo project?
Open two consoles and execute the scripts below in each console
```
// Console 1
// The frontend app
yarn start
```
```
// The server api app
// Console 2
yarn start-api
```

# Modules (intro)
A module in JavaScript is just a file containing related code

## Old fashion way
Add multiple scripts in html files

## Module types
### CJS
CommonJS

```
//importing 
const user = require('./user.cjs');

//exporting
module.exports = function user() {
  this.name = 'Mr Stone'
}
```
- Node use CJS module format
- CJS imports module synchronously
- When CJS imports, it will give you a copy of the imported object.
- CJS will not work in the browser. It will have to be transpiled and bundled.

### AMD
Asynchronous Module Definition.
```
define(['user', 'animal'], function (user, animal) {
    return function () {
      // Process
    };
});
or
// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function (require) {
    var user = require('user'),
      animal = require('animal');
    return function () {
      // Process
    };
});
```
- AMD imports modules asynchronously
- AMD is made for frontend (when it was proposed) (while CJS backend).

### UMD
Universal Module Definition.
```
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
      define(['dep'], factory);
    } else if (typeof exports === "object") {
      module.exports = factory(require("dep"));
    } else {
      root.User = factory(root.dep);
    }
}(this, function (dep) {
    // Process

    var User = { // ... };

    return User;
}));
```
- Works on front and back end (hence the name universal)
- Unlike CJS or AMD, UMD is more like a pattern to configure several module systems
- UMD is usually used as a fallback module when using bundler like Rollup/ Webpack


### ESM
ES Modules. It is Javascript's proposal to implement a standard module system.
```
import User from './user.mjs';
```
Or
```
import {foo, bar} from './user.mjs';

...

export default function() {
  // your Function
};
const user = {}
export user;
```

- Works in many modern browsers
- It has the best of both worlds: CJS-like simple syntax and AMD's async
- Tree-shakeable, due to ES6's static module structure
- ESM allows bundlers like Rollup to remove unnecessary code, allowing sites to ship less codes to get faster load.
- Can be called in HTML, just do:
```
<script type="module">
  import {user} from 'user';

  user.name;
</script>
```


# Transpiler and Polyfill
## Transpiler
A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
```
// nullish coalescing operator
// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;
```
**Babel** is one of the most prominent transpilers out there.

## Polyfill
A script that updates/adds new functions. It “fills in” the gap and adds missing implementations.
```
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```
Two interesting polyfill libraries:
- core js
- polyfill.io

# Node.js
Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript.

Node.js can be used to build different types of applications such as command line application, web application, real-time chat application, REST API server etc. However, it is mainly used to build network programs like web servers, similar to PHP, Java, or ASP.NET.

## Install node.js
https://nodejs.org/en/download
```
node -v
```

## Execute js with node
```
node index.js
```

## NPM
Node package manager
```
npm -v
```

## Yarn
By Meta (Facebook)
```
npm install -g yarn
yarn -v
```

# Webpack (intro)
As its core, webpack is a static module bundler. In a particular project, webpack treats all files and assets as modules.

In brief, webpack is an open-source JavaScript module bundler.

Webpack allows you to split your JavaScript into separate modules in development (better for maintenance) while letting you compile those modules into a single bundle in production (better for performance).

## Install
```
npm install webpack webpack-cli --save-dev
```
## Main Concepts
- Entry: the entry point is the module that webpack uses to start building its internal dependency graph.
- Output: the output property instructs webpack where to emit the bundle(s) and what name to use for the file(s).
- Loaders: by default, webpack only understands JavaScript and JSON files. To process other types of files and convert them into valid modules, webpack uses loaders.
- Plugins: plugins are used for any other task that loaders can’t do
- Mode: development, production or none.

# Babel (intro)
Babel is pretty much the standard transpiler to translate modern JavaScript (ES2015+) into compatible implementations that run in old browsers. It’s the perfect solution if you just want to concentrate on writing JavaScript.

And although the main goal of Babel is to translate the latest standards of ECMAScript (ES) for old — or sometimes current — browsers, it can do more.

## Babel with webpack