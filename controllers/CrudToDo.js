const Post = require('../models/todo');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

exports.createPost = async (req, res) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
  });

  await Post.create(post);

  res.send(post);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.Id);

  res.send(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.Id);

  res.send(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.Id);

  res.send({ message: 'post deleted' });
};
