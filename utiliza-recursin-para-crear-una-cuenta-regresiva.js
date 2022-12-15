// Cambia solo el código debajo de esta línea
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));
// Cambia solo el código encima de esta línea