var animals = ['hedgehogs', 'echidnas', 'koalas', 'chinchillas', 'wombats', 'toucans', 'geckos'];

var soCute = function() {
  for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]} are cute`)
  }
}

// soCute()


// 2. Create a function that contains a for loop that edits each element of the array to remove the last "s" of
// each string
var sortaCute = function() {
  for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i].slice(0, -1)
  }
  console.log(animals)
}

// sortaCute()


// 3. Create a function that contains a for loop that edits each element of the array, capitalizing each
// animal name string
var veryCute = function() {
  for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i][0].toUpperCase() + animals[i].slice(1)
  }
  console.log(animals)
}

// veryCute()


// 4. Create a function that returns an array that only contains the animals whose names are 6 letters or less
var smolCute = function() {
  var result = animals.filter(animal => animal.length <= 6)
  console.log(result)
}

// smolCute()


// 5. Create your own array! Practice looping over it - access each element, mutate each element, etc!
