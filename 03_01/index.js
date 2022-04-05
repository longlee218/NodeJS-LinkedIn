const fs = require('fs');
const data = require('./data.json');

console.log('data: ', data.text);

fs.readFile('./data.json', 'utf-8', (error, data) => {
  const dataJSON = JSON.parse(data);
  console.log('dataJSON: ', dataJSON.text);
});
