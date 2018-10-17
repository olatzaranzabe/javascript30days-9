'use strict';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello world');

// Interpolated
console.log('Hello I am a %s string!', 'short');

// Styled
console.log('%c I am some great text', 'color: red; background-color: pink;');
// warning!
console.warn('OH NOOO');

// Error :|
console.error('shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing, only appears if it's wrong
console.assert(1 === 2, 'That is wrong!');
console.assert(3 === 3, 'That is wrong!');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  //console.groupCollapsed to show it closed
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Oli');
console.count('Oli');
console.count('Oli');
console.count('Oli');
console.count('Oli');
// timing: to see how long something takes
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

console.table(dogs);