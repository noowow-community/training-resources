// JS avancé séance 7
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

// InnerText, textContent, innerHtml
// InnerText rendered text with appearance (CSS)
// textContent not.
// innerHtml rendered element html
(() => {
  console.log('---------------- InnerText, textContent, innerHtml ------------------');
  const source = document.getElementById("source")

  console.log('textContent', source.textContent)
  console.log('innerText', source.innerText)
  console.log('innerHtml', source.innerHTML)
});

// Value, src, href, and more
(() => {
  console.log('---------------- Value, src, href, and more ------------------');
  const value = document.querySelector("input").value
  const src = document.querySelector("img").src
  const href = document.querySelector("a").href
  const id = document.querySelector("button").id

  console.log('value', value)
  console.log('src', src)
  console.log('href', href)
  console.log('id', id)
});

// Getting and setting attribute(custom attribute)
(() => {
  console.log('---------------- Getting and setting attribute ------------------');
  const elem = document.querySelector("a")
  elem.setAttribute('role', 'lorem ipsum')
  elem.setAttribute('data-type', 'custom-attrib') // Custom attrib

  console.log('href', elem.getAttribute('href'))
  console.log('role', elem.getAttribute('role'))
  console.log('data-type', elem.getAttribute('data-type'))
});

// Finding parent, children, sibling
(() => {
  console.log('---------------- Finding parent, children, sibling ------------------');
  const elem1 = document.querySelector("#elem-1")
  const parent1 = document.querySelector("#parent-1")

  console.log('paren node', elem1.parentNode)
  console.log('parent element', elem1.parentElement)
  console.log('Select a parent', elem1.closest('#parent-3'))
  console.log('Select a parent', elem1.closest('[data-type="parent-item"]'))
  console.log('Select a child nodes', parent1.childNodes)
  console.log('Select a child elements', parent1.children)
  console.log('Select first child node', parent1.firstChild)
  console.log('Select last child node', parent1.lastChild)
  console.log('Select first child element', parent1.firstElementChild)
  console.log('Select last child element', parent1.lastElementChild)
  console.log('Select next sibling node', elem1.nextSibling)
  console.log('Select next sibling element', elem1.nextElementSibling)
  console.log('Select prev sibling node', elem1.previousSibling)
  console.log('Select prev sibling element', elem1.previousElementSibling)
});

// Changing multiple elements
(() => {
  console.log('---------------- Changing multiple elements ------------------');
  document.querySelectorAll('p[data-type]').forEach((elem, i) => {
    elem.setAttribute('data-item', `item-${++i}`)
    elem.innerText = `Paragraph -> ${i * 5}`
  })
});

// Altering styles
// Setter and getter
(() => {
  console.log('---------------- Altering styles ------------------');
  // Set style
  document.querySelectorAll('p[data-type]').forEach(elem => {
    console.log('style before', elem.style)
    elem.style.backgroundColor = 'yellow'
    elem.style.fontSize = '16px'
    Object.entries(elem.style).forEach(item => {
      Object.hasOwn(elem.style, item[1]) && console.log('style after', item[1], elem.style.getPropertyValue(item[1]))
    })
  })
});

// GetComputedStyle
// Read-only
(() => {
  console.log('---------------- GetComputedStyle ------------------');
  // GetComputedStyle
  const styles = window.getComputedStyle(document.querySelector('p.custom-parag'))
  console.log('GetComputedStyle', styles.getPropertyValue('font-size'), styles['width']);
});

// Manipulating classes
// Dark and light mode for Messenger app
(() => {
  console.log('---------------- Manipulating classes ------------------');
  // Set class
  document.querySelectorAll('p[data-type]').forEach(elem => {
    elem.setAttribute('class', 'red') // The class is an HTML Attribute
    elem.className += ' upper'
    console.log('classname', elem.className) // className is a DOM Property.
  })

  // Set class with class list
  document.querySelectorAll('p[data-type]').forEach(elem => {
    elem.classList.add('red', 'upper')
    console.log('classname', elem.className)
  })
});

// Create elements
// Append, prepend, before and after
// RemoveChild, remove
(() => {
  console.log('---------------- Manipuling elements ------------------');
  // create element
  const element = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  const browsers = ["Firefox", "Chrome", "Opera", "Safari"]

  browsers.forEach((browser) => {
    const li = document.createElement("li")
    li.textContent = browser
    fragment.appendChild(li)
  });

  element.appendChild(fragment)

  document.body.append(element)

  // Remove element
  document.querySelector('textarea').remove()
  document.querySelector('[data-type="parag"]').removeChild()
  document.querySelectorAll('[data-type="parag"] > *').forEach(v => v.remove())

  // Before and after the element
  const spanBefore = document.createElement('span')
  const spanAfter = document.createElement('span')
  spanBefore.textContent = 'Insert before'
  spanAfter.textContent = 'Insert after'
  document.querySelector('.custom-parag').before(spanBefore)
  document.querySelector('.custom-parag').after(spanAfter)

  // Append and prepend
  // First and last child in the element
  const elAppend = document.createElement('b')
  const elePrepend = document.createElement('b')
  elAppend.textContent = 'Element append'
  elePrepend.textContent = 'Element prepend'
  document.querySelector('.custom-parag').append(elAppend)
  document.querySelector('.custom-parag').prepend(elePrepend)

  // Exemple
  document.querySelector('.custom-parag').innerHTML = `
    <b>Element append</b>
    ${document.querySelector('.custom-parag').innerHTML}
    <b>Element prepend</b>
  `

  // ReplaceWith
  const elReplace = document.createElement('u')
  elReplace.textContent = 'Element replaced'
  elReplace.style.color = 'green'
  elAppend.replaceWith(elReplace)

  // ReplaceChildren
  const names = ["Stone", "Evens", "Jane", "John"]
  const otherFragment = document.createDocumentFragment()

  names.forEach((name) => {
    const li = document.createElement("li")
    li.textContent = name
    otherFragment.appendChild(li)
  });

  document.querySelector('ul').replaceChildren(otherFragment)
});


// Dom events
// Observer pattern
(() => {
  console.log('---------------- Observer pattern ------------------');
  // Listeners
  EventManager.shared.subscribe('patate', e => console.log(e))
  EventManager.shared.subscribe('mangue', e => console.log(e))
  EventManager.shared.subscribe('pain', e => console.log(e))

  EventManager.shared.notify('patate', 'Je suis une patate')
  EventManager.shared.notify('mangue', 'Je suis une mangue')
  EventManager.shared.notify('pain', 'Je mange du pain')
});

// Dom events
(() => {
  console.log('---------------- AddEventListener ------------------');
  // Listeners
  document.addEventListener('click', e => console.log(e))

  // Event object
  // target: identifies the element on which the event occurred
  // current target: element to which the event handler has been attached
  document.querySelector('button').addEventListener('click', e => {
    console.log(e)
    console.log(e.target)
    console.log(e.currentTarget)
  })

  // Event types
  document.addEventListener('click', e => console.log(e.target))
  document.addEventListener('mouseenter', e => console.log(e.target))
  document.addEventListener('mouseout', e => console.log(e.target))
  document.querySelector('textarea').addEventListener('focus', e => console.log(e.target))
  document.querySelector('textarea').addEventListener('input', e => console.log(e.target))

  // Event on multiple elements
  document.querySelector('#parent-4').addEventListener('click', e => console.log(e.target.id))
  document.querySelector('#parent-1').addEventListener('click', e => console.log(e.target.id))
  document.querySelector('#elem-2').addEventListener('click', e => console.log(e.target.id))

  // PreventDefault
  document.querySelector('a').addEventListener('click', e => {
    console.log(e.target.href)
    e.preventDefault()
  })

  // stopPropagation
  document.querySelector('.custom-parag').addEventListener('click', e => console.log('parent', e.target.className))
  document.querySelector('.custom-parag-2').addEventListener('click', e => {
    console.log('child', e.target.innerText)
    e.stopPropagation()
  })

  // Syntetic event: User created event, not browser event
  // Event dispatcher api
  // No payload event
  const event = new Event('click')
  document.querySelector('.custom-parag-2').dispatchEvent(event)

  // Custom event
  // Event names are case-sensitive.
  document.addEventListener('stone-event', e => console.log(e.detail))
  const customEvent = new CustomEvent('stone-event', { detail: 'my payload' })
  document.dispatchEvent(customEvent)
});



// Web components
// Custom element
// We can create custom HTML elements, described by our class, with its own methods and properties, events and so on.
// Ex: <noowow-community></noowow-community>
// DOM virtuel vs shaddow dom
(() => {
  console.log('---------------- Custom element ------------------');
  // Autonomous custom elements
  class NoowowCommunity extends HTMLElement {
    constructor() {
      super();
      this.dataType = 'Unknown'
    }
  
    connectedCallback() {
      this.render()
      console.log('Element added to the dom')
    }
  
    disconnectedCallback() {
      console.log('Element removed from the dom')
    }
  
    static get observedAttributes() {
      return ['data-type']
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'data-type') this.dataType = newValue
      this.render()
      console.log('attrib changed', name, oldValue, newValue)
    }
  
    adoptedCallback() {
      // called when the element is moved to a new document
      // (happens in document.adoptNode, very rarely used)
    }
    
    // User method
    render() {
      this.innerHTML = `<b>
        My name is: ${this.dataType}
      </b>`
    }
  }

  customElements.define("noowow-community", NoowowCommunity)
  const noowow = document.createElement('noowow-community')
  document.body.append(noowow)
  noowow.setAttribute('data-type', 'Mr Stone')


  // Customized built-in elements
  class NoowowButton extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', () => console.log('noowow button clicked'))
      this.style.backgroundColor = 'red'
      this.style.color = 'white'
      this.style.padding = '20px'
    }
  }

  customElements.define('noowow-button', NoowowButton, { extends: 'button' })

  const noowowBtn = document.createElement('button', { is: 'noowow-button' })
  document.body.append(noowowBtn)
});

// Html templates
(() => {
  console.log('---------------- Html templates ------------------');
  // Html templates
  const div = document.createElement('div')
  div.append(document.querySelector('#tmpl').content.cloneNode(true))
  document.body.append(div)
});

// Slots
(() => {
  console.log('---------------- Slots ------------------');
  // Slots
  class NoowowSlotCommunity extends HTMLElement {
    constructor() {
      super();
      this.dataType = 'Unknown'
    }
  
    connectedCallback() {
      this.render()
      console.log('Element added to the dom')
    }
  
    disconnectedCallback() {
      console.log('Element removed from the dom')
    }
  
    static get observedAttributes() {
      return ['data-type']
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'data-type') this.dataType = newValue
      this.render()
      console.log('attrib changed', name, oldValue, newValue)
    }
  
    adoptedCallback() {
      // called when the element is moved to a new document
      // (happens in document.adoptNode, very rarely used)
    }
    
    // User method
    render() {
      this.innerHTML = `
        <div>
          <slot name="start"></slot>
          <b>
            My name is: <slot>${this.dataType}</slot>
          </b>
          <slot name="end"></slot>
        </div>
      `
    }
  }

  customElements.define("noowow-slot-community", NoowowSlotCommunity)
  const noowow = document.createElement('noowow-slot-community')
  document.body.append(noowow)
  const myDiv = document.createElement('div')
  myDiv.innerHTML = `
    <noowow-slot-community>
      Mr Stone
      <h4 slot="end">Welcome guys!</h4>
      <h3 slot="start">Welcome guys!</h3>
    </noowow-slot-community>
  `

  document.body.append(myDiv)
});


// Shadow DOM serves for encapsulation
// Encapsulate css, events and more
// Light DOM vs Shadow DOM vs virtual DOM
// Virtual DOM is creating a copy of the whole DOM object
// Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent.
(() => {
  console.log('---------------- Shadow DOM ------------------');
  // Shadow DOM
  // Encapsulation mode: Open
  customElements.define('noowow-hello', class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' })
      shadow.innerHTML = `
        <style> h1 { font-weight: bold; color: green; } </style>
        <h1>
          Hello, <i>${this.getAttribute('name')}</i>
        </h1>
      `;
    }
  });
  
  const noowowHello = document.createElement('noowow-hello')
  noowowHello.setAttribute('name', 'Mr Stone')
  document.body.append(noowowHello)
  // shadow tree host
  document.querySelector('noowow-hello').shadowRoot.host // Is not null

  // Encapsulation mode: closed
  customElements.define('noowow-hello-closed', class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'closed' })
      shadow.innerHTML = `<h1>
        Hello, <i>${this.getAttribute('name')}</i>
      </h1>`;
    }
  });
  const noowowHelloClosed = document.createElement('noowow-hello-closed')
  noowowHelloClosed.setAttribute('name', 'Mr Stone')
  document.body.append(noowowHelloClosed)
  document.querySelector('noowow-hello-closed').shadowRoot // Is null

  // CSS Scoping
  customElements.define('custom-dialog', class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' }).append(document.querySelector('#boxTmpl').content.cloneNode(true))
    }
  });

  // Event retargeting
  customElements.define('user-card', class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <p>
          <button>Click me</button>
        </p>
      `;

      this.shadowRoot.firstElementChild.onclick = e => console.log("Inner target: " + e.target.tagName)
    }
  })

  document.onclick = e => console.log("Outer target: " + e.target.tagName)
});
