const italianFood = new Set(['Pizza', 'Pasta', 'Risotto', 'Spaghetti', 'Fusilli']);
const maxicalianFood = new Set(['Pizza', 'Pasta', 'Risotto']);

const duplicated = italianFood.intersection(maxicalianFood);
const unical = italianFood.union(maxicalianFood);
const spread = [...italianFood, ...maxicalianFood];
const difference = italianFood.difference(maxicalianFood);
const symanticAll = italianFood.symmetricDifference(maxicalianFood);

console.log(duplicated); // Set { 'Pizza', 'Pasta', 'Risotto' }
console.log('unical : ',unical); // Set { 'Pizza', 'Pasta', 'Risotto', 'Spaghetti', 'Fusilli' }
console.log('spread : ',spread); // [ 'Pizza', 'Pasta', 'Risotto', 'Spaghetti', 'Fusilli' ]
console.log('difference : ',difference); // Set { 'Spaghetti', 'Fusilli' }
console.log('symanticAll : ',symanticAll); // Set { 'Spaghetti', 'Fusilli', 'Pizza', 'Pasta', 'Risotto' }



