const user = require('../models/user');
const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().populate("todos");
  res.send(users);
};

exports.createUser = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    todos: req.body.Id
  });

  await User.create(user);

  res.send(user);
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.Id);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.Id);

  res.send(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.Id);

  res.send({ message: 'post deleted' });
};

exports.affecteUser = async (req, res) =>{
    // const user = await User.findById(req.params.UserId);
    // const todo = await ToDo.findById(req.params.ToDoId);
    const affectation= await User.findByIdAndUpdate(req.params.IdUser, {$push:{todos:req.params.IdToDo}}, {new:true});

    // Ajouter l'ID du todo au tableau de todos de l'utilisateur
    // user.todos.push(todo._id);
    // await user.save();
    res.send(affectation);
};

exports.supprimeUser = async (req, res)=>{
    // const user = await User.findById(req.params.Id);
    const supprime= await User.findByIdAndUpdate(req.params.IdUser, {$pull:{todos:req.params.IdToDo}}, {new:true});

    // Enlever l'ID du todo du tableau de todos de l'utilisateur
    // user.todos.pull(req.body.Id);
    // await user.save();
    res.send(supprime);
};