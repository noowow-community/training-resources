// JS avancé séance 4
// Online js evaluate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
import axios from 'axios'

// Sync request
(() => {
  console.log('Debut execution')
  const request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:8000/users', false)
  request.send(null)

  if (request.status === 200) {
    console.log(request.responseText)
  } else {
    console.log(request.statusText)
  }
  console.log('Fin execution')
})();

// Async request
(() => {
  console.log('Debut execution')
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:8000/users', true)
  xhr.onload = e => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  }

  xhr.onerror = (e) => {
    console.error(xhr.statusText);
  }

  xhr.send(null)
  console.log('Fin execution')
})();


// Async request
const ajaj = (url, method = 'get', body = null) => {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.responseType = 'json'
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.addEventListener('load', () => {
          const status = xhr.status
          const data = xhr.response
          const successStatus = Array(200).fill(0).map((_v, i) => 200 + i)
          if (successStatus.includes(status)) {
            resolve({ status, data })
          } else {
            reject({ status, statusText: xhr.statusText })
          }
      })
      body ? xhr.send(JSON.stringify(body)) : xhr.send()
  })
}

const fetchAjaj = async (url, method = 'get', body = null) => {
  body = body ? JSON.stringify(body) : undefined
  const response = await fetch(url, { method, body })
  if (response.ok) {
    const data = await response.json()
    return Promise.resolve({ status: response.status, data })
  } else {
    return Promise.reject({ status: response.stat, statusText: response.statusText })
  }
};

// XMLHttpRequest
(() => {
  const url = 'http://localhost:8000/users'
  const sendContainer = document.querySelector('#dataSend')
  const receiveContainer = document.querySelector('#dataReceived')
  const onDone = v => {
    console.log(v)
    receiveContainer.value = JSON.stringify(v)
  }
  const onFailed = e => receiveContainer.value = JSON.stringify(e)

  // Get all request
  document.querySelector('#xmlHttpReq [data-type="get"]').addEventListener('click', () => {
    ajaj(url)
      .then(onDone)
      .catch(onFailed)
  })

  // Get one request
  document.querySelector('#xmlHttpReq [data-type="get-one"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    ajaj(`${url}/${payload.id}`)
      .then(onDone)
      .catch(onFailed)
  })

  // POST request
  document.querySelector('#xmlHttpReq [data-type="post"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    ajaj(url, 'post', payload)
      .then(onDone)
      .catch(onFailed)
  })

  // PUT request
  document.querySelector('#xmlHttpReq [data-type="put"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    ajaj(`${url}/${payload.id}`, 'put', payload)
      .then(onDone)
      .catch(onFailed)
  })

  // PATCH request
  document.querySelector('#xmlHttpReq [data-type="patch"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    ajaj(`${url}/${payload.id}`, 'patch', payload)
      .then(onDone)
      .catch(onFailed)
  })

  // DELETE request
  document.querySelector('#xmlHttpReq [data-type="delete"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    ajaj(`${url}/${payload.id}`, 'delete')
      .then(onDone)
      .catch(onFailed)
  })
  
})();

// FETCH API
// fetch(resource)
// fetch(resource, options)
(() => {
  const url = 'http://localhost:8000/users'
  const sendContainer = document.querySelector('#dataSend')
  const receiveContainer = document.querySelector('#dataReceived')
  const onDone = v => {
    console.log(v)
    receiveContainer.value = JSON.stringify(v)
  }
  const onFailed = e => receiveContainer.value = JSON.stringify(e)

  // Get all request
  document.querySelector('#fetchReq [data-type="get"]').addEventListener('click', () => {
    fetchAjaj(url)
      .then(onDone)
      .catch(onFailed)
  })

  // Get one request
  document.querySelector('#fetchReq [data-type="get-one"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    fetchAjaj(`${url}/${payload.id}`)
      .then(onDone)
      .catch(onFailed)
  })

  // POST request
  document.querySelector('#fetchReq [data-type="post"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    fetchAjaj(url, 'post', payload)
      .then(onDone)
      .catch(onFailed)
  })

  // PUT request
  document.querySelector('#fetchReq [data-type="put"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    fetchAjaj(`${url}/${payload.id}`, 'put', payload)
      .then(onDone)
      .catch(onFailed)
  })

  // PATCH request
  document.querySelector('#fetchReq [data-type="patch"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    fetchAjaj(`${url}/${payload.id}`, 'patch', payload)
      .then(onDone)
      .catch(onFailed)
  })

  // DELETE request
  document.querySelector('#fetchReq [data-type="delete"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    fetchAjaj(`${url}/${payload.id}`, 'delete')
      .then(onDone)
      .catch(onFailed)
  })
  
})();

// Axios
(() => {
  const url = 'http://localhost:8000/users'
  const sendContainer = document.querySelector('#dataSend')
  const receiveContainer = document.querySelector('#dataReceived')
  const onDone = v => {
    console.log(v)
    receiveContainer.value = JSON.stringify(v)
  }
  const onFailed = e => receiveContainer.value = JSON.stringify(e)

  // Get all request
  document.querySelector('#axiosReq [data-type="get"]').addEventListener('click', () => {
    axios.get(url)
      .then(onDone)
      .catch(onFailed)
  })

  // Get one request
  document.querySelector('#axiosReq [data-type="get-one"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    axios.get(`${url}/${payload.id}`).then(onDone).catch(onFailed)
  })

  // POST request
  document.querySelector('#axiosReq [data-type="post"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    axios.post(url, payload)
      .then(onDone)
      .catch(onFailed)
  })

  // PUT request
  document.querySelector('#axiosReq [data-type="put"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    axios.put(`${url}/${payload.id}`, payload)
      .then(onDone)
      .catch(onFailed)
  })

  // PATCH request
  document.querySelector('#axiosReq [data-type="patch"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    axios.patch(`${url}/${payload.id}`, payload)
      .then(onDone)
      .catch(onFailed)
  })

  // DELETE request
  document.querySelector('#axiosReq [data-type="delete"]').addEventListener('click', () => {
    const payload = JSON.parse(sendContainer.value)
    axios.delete(`${url}/${payload.id}`)
      .then(onDone)
      .catch(onFailed)
  })
  
})();



// Prendre une partie d'un objet
const getAuthContext = () => {
  const { address, signature, nonce } = utils.getContext()
  return { address, signature, nonce }
  return Object.fromEntries(
    Object.keys(params)
      .filter(key => ['address', 'signature', 'nonce'].includes(key))
      .filter(key => (params[key] || '').trim().length > 0)
      .map(key => [key, params[key]])
  )
}