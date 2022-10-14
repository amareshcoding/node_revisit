const { Router } = require('express');
const movieRoute = Router();

const typeCheckMiddleWare = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre } = req.body;
  if (typeof ID === 'number') {
    next();
  } else {
    res.send('data types are incorrect');
  }
};

movieRoute.post('/', typeCheckMiddleWare, (req, res) => {
  console.log(req.body);
  res.send('Movie Added');
});

module.exports = movieRoute;

// ID: number
// Name: string
// Rating: number
// Description: string
// Genre: string
// Cast: string[]
