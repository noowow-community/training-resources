// Boucles

// For
(function() { // IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
  console.log('----------- For ----------');

  // Compter de 1 a 5
  for (let i = 1; i <= 5; i++) {
    console.log('Compter de 1 à 5 ->', i);
  }

  for (let i = 5; i > 0; i--) {
    console.log('Compter de 5 à 1 ->', i);
  }

  console.log('----------- For sur tableau ----------');
  // Parcourir un tableau
  const tableau = [10,20,'Bonjour'];
  for (let i = 0; i < tableau.length; i++) {
    console.log('Parcourir tableau du premier au dernier ->', tableau[i]);
  }
  for (let i = tableau.length - 1; i >= 0; i--) {
    console.log('Parcourir tableau du dernier au premier ->', tableau[i]);
  }

  console.log('----------- For sur objet literal ----------');
  // Parcourir un objet literal
  const objet = { name: 'Mr Stone', age: 12, gender: 'male' };
  const objectKeys = Object.keys(objet);
  for (let i = 0; i < objectKeys.length; i++) {
    console.log('Parcourir un objet literal du premier au dernier ->', objet[objectKeys[i]]);
  }
  for (let i = objectKeys.length - 1; i >= 0; i--) {
    console.log('Parcourir un objet literal du premier au dernier ->', objet[objectKeys[i]]);
  }
})();

// While
(function() { // IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
  console.log('----------------------------------');
  console.log('----------------------------------');
  console.log('----------- While ----------');

  // Compter de 1 a 5
  let i = 1;
  while (i <= 5) {
    i++;
    console.log('Compter de 1 à 5 ->', i);
  }

  while (i > 0) {
    console.log('Compter de 5 à 1 ->', i);
    i--;
  }

  console.log('----------- While sur tableau ----------');
  // Parcourir un tableau
  const tableau = [10,20,'Bonjour'];
  i = 0;
  while (i < tableau.length) {
    console.log('Parcourir tableau du premier au dernier ->', tableau[i]);
    i++;
  }
  i = tableau.length;
  while (i >= 0) {
    console.log('Parcourir tableau du dernier au premier ->', tableau[i]);
    i--;
  }

  console.log('----------- While sur objet literal ----------');
  // Parcourir un objet literal
  const objet = { name: 'Mr Stone', age: 12, gender: 'male' };
  const objectKeys = Object.keys(objet);
  i = 0;
  while (i < objectKeys.length) {
    console.log('Parcourir un objet literal du premier au dernier ->', objet[objectKeys[i]]);
    i++;
  }
  i = objectKeys.length - 1
  while (i >= 0) {
    console.log('Parcourir un objet literal du dernier au premier ->', objet[objectKeys[i]]);
    i--;
  }
})();

// Do While
(function() { // IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
  console.log('----------------------------------');
  console.log('----------------------------------');
  console.log('----------- Do While ----------');

  // Compter de 1 a 5
  let i = 1;
  do {
    console.log('Compter de 1 à 5 ->', i);
    i++;
  } while (i <= 5);

  do {
    console.log('Compter de 5 à 1 ->', i);
    i--;
  } while (i > 0);

  console.log('----------- Do While sur tableau ----------');
  // Parcourir un tableau
  const tableau = [10,20,'Bonjour'];
  i = 0;
  do {
    console.log('Parcourir tableau du premier au dernier ->', tableau[i]);
    i++;
  } while (i < tableau.length);
  i = tableau.length;
  do {
    console.log('Parcourir tableau du dernier au premier ->', tableau[i]);
    i--;
  } while (i >= 0);

  console.log('----------- Do While sur objet literal ----------');
  // Parcourir un objet literal
  const objet = { name: 'Mr Stone', age: 12, gender: 'male' };
  const objectKeys = Object.keys(objet);
  i = 0;
  do {
    console.log('Parcourir un objet literal du premier au dernier ->', objet[objectKeys[i]]);
    i++;
  } while (i < objectKeys.length);
  i = objectKeys.length - 1
  do {
    console.log('Parcourir un objet literal du dernier au premier ->', objet[objectKeys[i]]);
    i--;
  } while (i >= 0);
})();

// For in
// Notes: En effet, for...in permet de parcourir les propriétés définies par l'utilisateur ainsi que les éléments de tableau. 
// Ainsi, si l'on modifie un objet Array en lui ajoutant des propriétés et/ou des méthodes, la boucle for...in renverra le nom de ces nouvelles propriétés en plus des indices des éléments du tableau.
(function() { // IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
  console.log('----------- For in ----------');

  console.log('----------- For in sur tableau ----------');
  // Parcourir un tableau
  const tableau = [10,20,'Bonjour'];
  for (const key in tableau) {
    console.log('Parcourir tableau du premier au dernier ->', tableau[key]);
  }
  for (const key in tableau.reverse()) {
    console.log('Parcourir tableau du dernier au premier ->', tableau[key]);
  }

  console.log('----------- For in sur objet literal ----------');
  // Parcourir un objet
  const objet = { name: 'Mr Stone', age: 12, gender: 'male' };
  for (const key in objet) {
    console.log('Parcourir un objet literal du premier au dernier ->', key, objet[key]);
  }
  for (const key in Object.fromEntries(Object.entries(objet).reverse())) {
    console.log('Parcourir un objet literal du premier au dernier ->', key, objet[key]);
  }
})();

// For of
(function() { // IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
  console.log('----------- For of ----------');

  console.log('----------- For of sur tableau ----------');
  // Parcourir un tableau
  const tableau = [10,20,'Bonjour'];
  for (const value of tableau) {
    console.log('Parcourir tableau du premier au dernier ->', value);
  }
  for (const value of tableau.reverse()) {
    console.log('Parcourir tableau du dernier au premier ->', value);
  }

  console.log('----------- For of sur objet literal ----------');
  // Parcourir un objet
  const objet = { name: 'Mr Stone', age: 12, gender: 'male' };
  for (const value of Object.entries(objet)) {
    console.log('Parcourir un objet literal du premier au dernier ->', value, value[0], value[1]);
  }
  for (const value of Object.entries(objet).reverse()) {
    console.log('Parcourir un objet literal du premier au dernier ->', value, value[0], value[1]);
  }
})();

// Break, continue and labeled
(function() { // IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement)
  console.log('----------- break ----------');
  // Compter de 1 a 5
  for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log('Compter de 1 à 5 ->', i);
  }

  for (let i = 5; i > 0; i--) {
    if (i === 3) break;
    console.log('Compter de 5 à 1 ->', i);
  }

  console.log('----------- continue ----------');
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log('Compter de 1 à 5 ->', i);
  }

  for (let i = 5; i > 0; i--) {
    if (i === 3) continue;
    console.log('Compter de 5 à 1 ->', i);
  }

  console.log('----------- labeled ----------');
  outerloop:
    for (let i = 1; i <= 5; i++) {
      innerloop:
        for (let j = 1; j <= 5; j++) {
          // if (i === 3) continue outerloop;
          if (i === 3) break outerloop;
          console.log('Compter de 1 à 5 ->', 'j:', j);
        }
      console.log('Compter de 1 à 5 ->', 'i:', i);
    }
  
  outerloop:
    for (let i = 5; i > 0; i--) {
      innerloop:
        for (let j = 5; j > 0; j--) {
          if (i === 3) continue;
          if (j === 3) break;
          console.log('Compter de 5 à 1 ->', 'j:', j);
        }
      console.log('Compter de 5 à 1 ->', 'i:', i);
    }
})();
