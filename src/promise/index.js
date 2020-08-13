//usando ecmaSCRIPT6, estructura de una promesa
const somethingWillHappend = () => {
  //la funcion promise recibe 2 argumentos 1 si se resuelve y 2 si es rechazada
  return new Promise((resolve, reject) => {
    //validacion de si resuelve o rechaza y realizar algo
    if (true) {
      resolve('Hey!, resuelto');
    } else {
      reject('Whooooops!, rechazado');
    }
  })
}

somethingWillHappend()
  .then(response => console.log(response))
  .catch(err => console.log(err));


//manejando tiempos
const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      //setTimeOut recibe 2 argumentos 1 la funcion y 2 el tiempo
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error = new Error('Whoopz!, rechazado');
      reject(error);
    }
  });
}

somethingWillHappend2()
  .then(response => console.log(response))
  //puedo usar mas then
  .catch(err => console.error(err));


//corriendo varias promesas al mismo tiempo

Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err); W
  })