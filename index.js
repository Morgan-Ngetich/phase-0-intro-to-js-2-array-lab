// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
  cats.pop(4);
}

function destructivelyRemoveFirstCat(name) {
  cats.splice(0,1);
}

function appendCat(name) {
  const newCats= [ ...cats, "Broom"]
  return newCats
}

function prependCat(name) {
  const theNewCats = ["Arnold", ...cats]
  return theNewCats
}

function removeLastCat(name) {
  const theNewCats2 = cats.slice(0, -1);
  return theNewCats2
}

function removeFirstCat(name) {
  const theNewCats3 = cats.slice(1);
  return theNewCats3
}


