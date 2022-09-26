const { Router } = require('express');
const User = require('../models/user.model');

const userRoute = Router();

userRoute.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

userRoute.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
userRoute.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log('user: ', user);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
userRoute.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send('user deleted succssesfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = userRoute;
