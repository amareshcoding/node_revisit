const express = require('express');

const userRoute = express.Router();

const User = require('../models/user.model');

userRoute.get('/', async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

userRoute.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

userRoute.post('/', async (req, res) => {
  try {
    const user = User.create(req.body);
    return res.status(201).send('user created successfully');
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

userRoute.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

userRoute.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = userRoute;
