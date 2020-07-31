const dropdown = require('dropdown-odin');

const res = dropdown('...', ['one', 'two']);
console.log(res);

document.querySelector('main').appendChild(res);