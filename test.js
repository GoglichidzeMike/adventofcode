let array = ["string", "st34444", "st35555"];

for (let i = 0; i < array.length; i++) {
  array[i] = array[i].substring(0, 3);
}

console.log(array);
