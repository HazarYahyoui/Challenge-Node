const nodemailer = require('nodemailer');
const ejs = require('ejs');
const express = require('express');
const fs = require('fs');
const path = require('path');

exports.emailText = async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });
    const from= req.body.from;
    const to= req.body.to;
    const subject= req.body.subject;
    const text= req.body.text;

     let info = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };
     transporter.sendMail(info, function(error, succes){
        if (error) {
            responseobj = {
                'status':'error',
                'msg': 'Email does not send ',
                'body': error
            }
            res.status(500).send(responseobj);
            
        } else {
            res.status(200).send('Email sent: ' + succes.response);
        }
    });
};

exports.emailHtml= async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });
     let info = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html
    };
     transporter.sendMail(info, function(error, info){
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
};
exports.emailFichier= async (req, res) => {
    const filepath = path.resolve('../mailTemplate/email.html');
    const template = fs.readFileSync(filepath, {encoding:'utf-8'});
    const option = {name:'hazar'}
    const render = ejs.render(template, option );
    let transporter = nodemailer.createTransport({
        service: gmail,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });
    let info = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: render
    };
     transporter.sendMail(info, function(error, info){
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
}

exports.emailAttachment= async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: gmail,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });
     let info = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    attachments: req.files.map(file => ({
        filename: file.originalname,
        content: file.buffer
    }))
    };
     transporter.sendMail(info, function(error, info){
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
};

