const ToDo = require('../models/todo');

exports.getAllPosts = async (req, res) => {
  const Todos = await ToDo.find();
  res.send(Todos);
};

exports.createPost = async (req, res) => {
  const todo = new ToDo({
    name: req.body.name,
    description: req.body.description,
  });

  await ToDo.create(todo);

  res.send(todo);
};

exports.getPost = async (req, res) => {
  const todo = await ToDo.findById(req.params.Id);

  res.send(todo);
};

exports.updatePost = async (req, res) => {
  const todo = await ToDo.findByIdAndUpdate(req.params.Id);

  res.send(todo);
};

exports.deletePost = async (req, res) => {
  await ToDo.findByIdAndDelete(req.params.Id);

  res.send({ message: 'post deleted' });
};
