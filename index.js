var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  var result = kittens;
  result.unshift(name);
  return result;
}

function removeLastKitten() {
  var result = kittens;
  result.pop();
  return result;
}

function removeFirstKitten() {
  var result = kittens.shift();
  return result;
}
