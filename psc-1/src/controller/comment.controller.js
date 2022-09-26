const { Router } = require('express');
const Comment = require('../models/comment.model');

const commentRoute = Router();

commentRoute.get('/', async (req, res) => {
  try {
    const comment = await Comment.find();
    // .populate({ path: 'fans', select: 'email' });
    res.send(comment);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

commentRoute.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.send(comment);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
commentRoute.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.send(comment);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
commentRoute.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.send('comment deleted succssesfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = commentRoute;
