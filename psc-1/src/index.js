const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const connect = require('./config/db');
const commentRoute = require('./controller/comment.controller');
const postRoute = require('./controller/post.controller');
const userRoute = require('./controller/user.controller');
app.use(express.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/comment', commentRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`server started on PORT ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
