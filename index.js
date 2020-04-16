var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(kittens, name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(kittens, name) {
  kittens.unshift(name);
  return kittens;
}
