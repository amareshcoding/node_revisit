const express = require('express');
const connect = require('./config/db');
const movieRoute = require('./controller/movie.controller');
const userRoute = require('./controller/user.controller');

const app = express();
app.use(express.json());
//
app.get('/', (req, res) => {
  res.send('home route');
});
app.use('/user', userRoute);

app.use('/movie', movieRoute);

app.listen(8080, async () => {
  try {
    await connect();
    console.log('server sarted at port 8080');
  } catch (err) {
    console.log(err);
  }
});
