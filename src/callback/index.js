function sum(num1, num2) {
  return num1 + num2;
}
//por estandar se pone el nombre de callback pero se puede nombrar como querramos
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function date(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000)
  //el segundo valor que se suele pasar a un timeout es el tiempo en milisegundos
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);