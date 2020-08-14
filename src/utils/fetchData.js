//transformando a ecmaScript 6 el ejercicio del challenge
//instancia de xmlhttprequest para hacer peticiones a nuestra api
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


//funcion que recibe la api a la que nos conectaremos y un callback
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error', url_api))
      }
    });
    xhttp.send();
  });
}

module.exports = fetchData;