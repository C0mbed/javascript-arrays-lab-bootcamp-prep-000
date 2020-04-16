var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(kittens, name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(kittens) {
  kittens.shift();
  return kittens;
}
