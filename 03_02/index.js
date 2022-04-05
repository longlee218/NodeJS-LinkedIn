const fs = require('fs');

fs.readdir('C:/', (error, data) => {
  console.log(data);
});
