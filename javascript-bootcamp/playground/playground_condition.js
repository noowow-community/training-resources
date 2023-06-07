// Structure conditionnelles
// Falsy values
const val1 = false, 
  val2 = undefined
  val3 = NaN,
  val4 = 0,
  val5 = "",
  val6 = ' ';

console.log('----------- Falsy values ----------');

if(!val1) console.log("False ->", !!val1);
if(!val2) console.log("undefined ->", !!val2);
if(!val3) console.log("NaN ->", !!val3);
if(!val4) console.log("0 ->", !!val4);
if(!val5) console.log('"" ->', !!val5);
if(!val6.trim()) console.log("' ' ->", !!val6);

// truthy values
console.log('----------- truthy values ----------');
console.log("True ->", !!true);
console.log("'False' ->", !!'false');
console.log("{} ->", !!{});
console.log("[] ->", !![]);
console.log('"0" ->', !!"0");
console.log("12 ->", !!12);
console.log("-12 ->", !!-12);
console.log("-0.14 ->", !!-0.14);
console.log("Infinity ->", !!Infinity);


// Les opérateurs &&, ||, ! Et !!
console.log('----------- Les opérateurs &&, ||, ! Et !! ----------');
console.log("[] && {} ->", !!([] && {}));
console.log("[] && '' ->", !!([] && ''));
console.log("0 || '' ->", !!(0 || ''));
console.log("0 || '0' ->", !!(0 || '0'));
console.log("'false' || 'true' ->", !!('false' || 'true'));
console.log("!0 ->", !0);
console.log("!'0' ->", !'0');
console.log("!!false ->", !!false);
console.log("!!true ->", !!true);

// Nullish coalescing, ?? Et ??= null or undefined
console.log('----------- Nullish coalescing ----------');
const emptyVal = null;
console.log("defaultValue when null:", emptyVal ?? 'My name null');

const emptyVal2 = undefined;
console.log("defaultValue when undefined:", emptyVal2 ?? 'My name undefined');

const emptyVal3 = '';
console.log("defaultValue when empty:", emptyVal3 ?? 'My name empty');

// Default value ?? vs ||
console.log('----------- ?? vs || ----------');
console.log("defaultValue || -> ", emptyVal3 || 'My name empty');
console.log("defaultValue ?? -> ", emptyVal3 ?? 'My name empty');

// Nullish coalescing assignment
const nullish = { age: 12 };
nullish.name ??= 'My name is Mr Stone'
console.log("Nullish coalescing assignment name ?? -> ", nullish.name);
nullish.age ??= 52
console.log("Nullish coalescing assignment age ?? -> ", nullish.age);

// If else
console.log('----------- If else sans {} ----------');
const ifElse = '0';
if (ifElse === '0') console.log(`if ${ifElse} === '0'`);
else if (ifElse === '0') console.log(`if ${ifElse} === '0'`);
else console.log(`if else ${ifElse}`);

console.log('----------- If else avec {} ----------');
if (ifElse === '0') {
  console.log(`if ${ifElse} === '0'`);
} else if (ifElse === '0') {
  console.log(`if ${ifElse} === '0'`);
} else {
  console.log(`if else ${ifElse}`);
} 

console.log('----------- If else imbriqué ----------');
if (ifElse === '0') {
  if (typeof ifElse === 'string') console.log(`if ${ifElse} === 'string'`);
  else console.log(`if ${ifElse} !== 'string'`);
}

console.log('----------- Yoda conditions ----------');
if ('0' === ifElse) console.log(`Yoda condition ${ifElse} === '0'`);
if (yoda = 'yoda') console.log(`Yoda condition mistake`, yoda);

// Switch
console.log('----------- Switch ----------');
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// Evaluation Egalite stricte
console.log('----------- Evaluation Egalite stricte ----------');
const expr2 = '1';
switch (expr2) {
  case '1':
    console.log('String 1 est la valeur du swtich');
    break;
  case '1':
    console.log('Number 1 est la valeur du swtich');
    break;
  default:
    console.log(`Comportement par defaut mais pas obligatoire ${expr}.`);
}

// Que se passe t-il quand on a oublié un break
console.log('----------- Quand on a oublié un break ----------');
const toto = 0;
switch (toto) {
  case -1:
    console.log('moins un');
    break;
  case 0:
    console.log('Oublie break', 0);
  case 1:
    console.log('Oublie break', 1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

// Regrouper différents cas
const animal = 'girafe';
console.log('----------- Regrouper différents cas ----------');
switch (animal) {
  case 'vache':
  case 'girafe':
  case 'chien':
  case 'cochon':
    console.log('Cet animal est un mammifère');
    break;
  case 'oiseau':
  default:
    console.log('Cet animal n\'est pas un mammifère.');
}

// Intercaler la règle par défaut
console.log('----------- Intercaler la règle par défaut ----------');
const bouki = 5
switch (bouki) {
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
  case 1:
    console.log("1");
}


// Ternaire
console.log('----------- Ternaire ----------');
const ternaire = 'mon ternaire';

ternaire
  ? ternaire 
  : 'Vide'

console.log('Simple ternaire', ternaire ? ternaire : 'Vide');
console.log('Ternaire imbrique', ternaire ? (ternaire.includes('nom') ? ternaire : 'Pas de nom') : 'Vide');
console.log('Simple ternaire', ternaire ? ternaire : 'Vide');

console.log('Simple ternaire', ternaire || 'Vide');


// Short circuit evaluations
console.log('----------- Short circuit evaluation ----------');
const printName = function(value) {
  console.log('Your name is', value);
}

const name = 'Mr Stone';

name && printName(name);

// Soumission d'un formulaire quand il n'y a pas d'erreur
const errors = [];
const form = () => { console.log('formulaire soumis') }

errors.length === 0 && form();
