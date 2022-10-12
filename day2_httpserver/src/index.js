const fs = require('fs');

let db = require('../product.json');

let data = { id: 3, title: 'json-server', author: 'typicode' };
db.posts.push(data);
console.log('db: ', db);

fs.writeFile(`../product.json`, JSON.stringify(db), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
