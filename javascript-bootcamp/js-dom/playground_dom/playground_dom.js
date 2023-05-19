// DOM

// Les principaux objets pour acceder au DOM
// Explication sur l'API
(function() {
  console.log('----------- Principaux objets ----------');

  // L'objet window
  console.log('Window');
  console.log(window);

  // L'objet document, son interface HTMLDocument et ses parents
  console.log('Document');
  console.log(window.document.documentElement);
  console.log(window.document);

  // Chargement d'une page
  // La page doit finir de se charger avant de commencer à executer du code 
  document.body.onload = function(e) {
    console.log('La page est prête', e)
  }

  // IIEF
  (function() {
    console.log('La page est prête IIEF')
  })()

  window.alert('Bienvenue sur ma page Web !')
})();

// Manipulation des noeuds
(function() {
  console.log('----------- Manipulation des noeuds ----------');

  // Creer un noeud et l'ajouter dans le dom
  const p = document.createElement('p')
  p.innerText = "Je suis Mr Stone"
  p.id = "nom"
  document.body.append(p)

  // Modifier le contenu d'un noeud
  document.getElementById('nom').innerText = "Je suis Mr Plaaaah!"

  // Ajouter et ecoutes des evenement
  const btn = document.createElement('button')
  btn.innerText = "Subscribe"
  btn.id = "btn"
  document.body.append(btn)
  btn.addEventListener('click', function(e) {
    console.log("Subscribe clicked", e)
  })
})();

// L'interface NodeSelector
// On peut utiliser les selecteurs css
(function() {
  console.log('----------- Interface NodeSelector ----------');

  // querySelectorAll
  // All parag
  document.querySelectorAll("p").forEach(v => console.log(v.innerHTML));
  // All class parag
  document.querySelectorAll("p.parag").forEach(v => console.log(v.innerHTML));

  // querySelector
  // A parag by id
  console.log(document.querySelector("#parag").innerHTML);

  // A parag by custom attrib
  console.log(document.querySelector('[data-type="parag-1"]').innerHTML);

  // A parag by custom attrib
  console.log(document.querySelector('[data-type="parag-1"] ~ p').innerHTML);

  // Parent node
  console.log(document.querySelector('[data-type="parag-1"] ~ p').parentElement.innerHTML);

  console.log(document.querySelector('[data-type="parag-1"] ~ p button i').innerHTML);
})();

// Les evenements
(function() {
  console.log('----------- Les evenements ----------');

  // Ecouter des evenements
  document.body.addEventListener('mouseleave', function(e) {
    console.log('hover on document', e)
  });

  //  Ecouter des evenements Event on many elements
  document.querySelectorAll('[data-type="btn-1"]').forEach(v => {
    v.addEventListener('click', function(e) {
      console.log('click on type = btn-1', e)
    })
  })

  // Lancer des evenements
  document.body.dispatchEvent(new Event('mouseleave'))
  document.querySelector('[data-type="btn-1"]').dispatchEvent(new Event('click'))
})()

// API communes
(function() {
  console.log('----------- API communes ----------');

  document.getElementById()
  document.getElementsByTagName()
  document.createElement()
  document.getElementById('parag').appendChild()
  document.getElementById('parag').innerHTML
  document.getElementById('parag').style.left
  document.getElementById('parag').setAttribute('role', 'text')
  console.log(document.getElementById('parag').getAttribute('role'))
  document.getElementById('parag').addEventListener('click', function() {})
  window.onload = function() {}
  console.log('Log item')
  window.scrollTo()
})()
