const { Router } = require('express');
const Post = require('../models/post.model');

const postRoute = Router();

postRoute.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    // .populate({ path: 'fans', select: 'email' });
    res.send(post);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

postRoute.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
postRoute.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.send(post);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
postRoute.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send('post deleted succssesfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = postRoute;
