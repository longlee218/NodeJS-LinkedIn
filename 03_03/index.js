const fs = require('fs');

const data = {
  name: 'Bob',
};

fs.writeFile('./data.json', JSON.stringify(data), (error) => {
  if (error) console.log(error);
  else console.log('success');
});
