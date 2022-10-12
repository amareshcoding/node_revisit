const express = require('express');

const router = express.Router();

const fs = require('fs');
const product = fs.readFileSync(`${__dirname}/product.json`, {
  encoding: 'utf-8',
});
data = JSON.parse(product);
//http://localhost:8000/post/?name=karthik
router.get('/post', (req, res) => {
  let { id, name, price } = req.query;

  let prod = data.filter((p) => {
    if (id) {
      return p.id === parseInt(id);
    }
    if (name) {
      return p.name === name;
    }
    if (price) {
      return p.price >= parseInt(price);
    }
    return false;
  });

  res.send(prod);
});

router.get('/:id', (req, res) => {
  let { id } = req.params;
  let prod = data.find((p) => p.id === parseInt(id));
  res.send(prod);
});

router.post('/', (req, res) => {
  console.log(req.body);
  data.push(req.body);
  fs.writeFile(`${__dirname}/product.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.send(data);
});

router.put('/:id', (req, res) => {
  let { id } = req.params;
  let body = req.body;

  let updatedData = data.map((d) => {
    if (d.id === +id) {
      return body;
    } else return d;
  });

  fs.writeFile(`${__dirname}/product.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  res.send(data);
});
//let dataObj =  {
//   id: 1,
//   name: 'Ellissa',
//   gender: 'Female',
//   birth: 'China',
//   current: 'Japan',
//   visited: [
//     { name: 'Azerbaijan' },
//     { name: 'Cameroon' },
//     { name: 'Morocco' },
//     { name: 'Indonesia' },
//     { name: 'China' },
//   ],
// },
// dataObj[name] = "something else"
// body = { name: 'changed'}
//uuid, nanoid
router.patch('/:id', (req, res) => {
  let { id } = req.params;
  let body = req.body;
  let updatedData = data.map((d) => {
    if (d.id === +id) {
      for (let k in req.body) {
        d[k] = req.body[k];
      }
      return d;
    } else return d;
  });
 
  fs.writeFile(`${__dirname}/product.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  res.send(data);
});
router.put('/:id', (req, res) => {
  let { id } = req.params;
  let prod = data.find((p) => p.id === parseInt(id));
  if (!prod) {
    res.send('product not exists');
  }
  for (let k in req.body) {
    prod[k] = req.body[k];
  }

  fs.writeFile(`${__dirname}/product.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  res.send(data);
});

router.delete('/:id', (req, res) => {
  let { id } = req.params;

  let remainingProd = data.filter((p) => p.id != parseInt(id));

  fs.writeFile(
    `${__dirname}/product.json`,
    JSON.stringify(remainingProd),
    (err) => {
      if (err) throw err;
      console.log('The file has been deleted!');
    }
  );
  res.status(202).send(remainingProd);
});

let db = [
  {
    id: 1,
    name: 'Ellissa',
    gender: 'Female',
    birth: 'China',
    current: 'Japan',
    visited: [
      { name: 'Azerbaijan' },
      { name: 'Cameroon' },
      { name: 'Morocco' },
      { name: 'Indonesia' },
      { name: 'China' },
    ],
  },
  {
    id: 2,
    name: 'Olympe',
    gender: 'Female',
    birth: 'China',
    current: 'France',
    visited: [{ name: 'Russia' }, { name: 'Bolivia' }, { name: 'Brazil' }],
  },
  {
    id: 3,
    name: 'Giacobo',
    gender: 'Male',
    birth: 'United States',
    current: 'United States',
    visited: [
      { name: 'Uzbekistan' },
      { name: 'Argentina' },
      { name: 'Portugal' },
    ],
  },
];
router.get('/person', (req, res) => {
  let { birth, current, visited } = req.query;
  let temp = db;
  if (visited) {
    temp.filter((e) => {
      let arr = e.visited;
      let flag = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === visited) {
          flag = true;
          break;
        }
      }
      if (flag) return e;
    });
  }
});

module.exports = router;
