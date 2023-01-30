const Authentification= require('../models/authentification');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register= async (req, res)=>{
    // test si l’email de l‘utilisateur existe déjà ou non
    const exist= await Authentification.findOne({email: req.body.email});
    if (exist){
        return res.send({message: 'Email already used '});
    }else {
     // salt c'est le nombre de fois ou on va crypter le password
    const salt= await bcrypt.genSalt(10); 

    // hashedPass est le password après cryptage
    const hashedPass= await bcrypt.hash(req.body.password, salt);

    const authentification= new Authentification({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPass
    });
    await Authentification.create(authentification);
    res.send(authentification);
}};

exports.login = async(req, res) =>{
    const authentification = await Authentification.findOne({email: req.body.email});
    if (!authentification) {
        return res.send({message: 'Invalid email or password'});
    }

    const validPassword = await bcrypt.compare(req.body.password, authentification.password);
    if (!validPassword) {
        return res.send({message:'Invalid email or password'});
    };
    // Token
    const payload = {
        email: authentification.email,
        id: authentification._id
    };
    const token = await jwt.sign(payload, process.env.Secret_Key, {expiresIn: '1d'});
   
    res.send({message:'login successful', token})
};


