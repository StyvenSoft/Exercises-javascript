// HTTP Requests

// bucle de eventos

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

// XHR GET Requests

// example URL endpoint
// solicitud AJAX utilizando un objeto XHR.

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();

// Example Datamuse API

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery = inputField.value;
const endpoint = (`${url} + ${queryParams} + ${wordQuery}`);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
  // Event handler code
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response)
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


// XHR GET Requests example

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// solicitud AJAX POST completa

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () =>{
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data);

// XHR Post Requests
// obtener una clave API de Rebrandly
// Example: acortador de url
// Information to reach API
const apiKey = '478973e548b0487bab04107b53ba757c';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
    xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


// Example JSON Jenerator


const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};

const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

jsonButton.addEventListener('click', generateJson);


// fetch() GET Requests
//Las solicitudes GET que usan fetch()

fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});

// Acceder a la API de Datamuse y generar información en el navegador.
// fetch() GET Requests

// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint, {cache: 'no-cache'}).then(response =>{
    if(response.ok){
       return response.json()
    }
    throw new Error('Request failed!');
  },(networkError) =>{
    console.log(networkError.message);
  });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// Tomar la información que se le devolvió con la promesa y manipulará la página web.

// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then((jsonResponse) =>{
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// fetch() POST Requests

// solicitud POST completa usando fetch()y .then().

fetch('https://api-to-call.com/endpoint', {
  method : 'POST',
  body : JSON.stringify({id: '200'})
}).then(response => {
  if(response.ok){
     return response.json();
  } throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    // code the execute with JsonResponse
  }
);

// fetch() Post Requests

// acortar una URL utilizando la API de acortamiento de URL de Rebrandly.


// Information to reach API
const apiKey = '478973e548b0487bab04107b53ba757c';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, { method : 'POST', headers : {
  'Content-type': 'application/json',
  'apikey': apiKey
    },
    body : data
  }).then(response =>{
    if(response.ok){
       return response.json();
    } throw new Error ('Request failed!');
  }, (networkError) => console.log(networkError.message)
  ).then(jsonResponse => {
    renderResponse(jsonResponse);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// async GET Requests

// código repetitivo necesario para crear una solicitud GET usando el async y await.

const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    } throw new Error('Request failed!');
  }
  catch(error) {
    console.log(error)
  }
}


// async GET Requests

// obtener sustantivos que describan la palabra ingresada desde la API de Datamuse

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = (`${url}${queryParams}${wordQuery}`);
  try{
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
       const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error){
    console.log(error);
  }
}


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// async POST Requests

//solicitud POST usando asyncy await.

const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint', {
      method : 'POST',
      body : JSON.stringify({id: 200})
    })
    if(response.ok) {
     const jsonResponse = await response.json();
      return jsonResponse;
     } throw new Error('Request failed!');
  }catch (error) {
    console.log(error);
  }
}

// async POST Requests

// recuperar su clave API Rebrandly para acceder a la API

// information to reach API
const apiKey = '478973e548b0487bab04107b53ba757c';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  try {
    const response = await fetch(url, {
      method : 'POST',
      body : data,
      headers : {
        'Content-type': 'application/json',
        'apikey': apiKey
      }
    })
    if(response.ok) {
       const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }

  } catch(error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
