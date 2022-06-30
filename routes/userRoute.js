const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/users', async(req, res) => {
    const users = await User.find({});
    res.render('index', { users });
})

//New Page to Create a New User
router.get('/users/new', (req, res) => {
    res.render('new');
});

//Creating the User in DB
router.post('/users', async(req, res) => {
    const { name, age } = req.body;
    await User.create({ name, age });
    res.redirect('/users');
});


//Show a User
router.get('/users/:userid', async(req, res) => {
    const { userid } = req.params;
    const user = await User.findById(userid);
    res.render('show', { user });
});


//Edit User Details 
router.get('/users/:userid/edit', async(req, res) => {
    const { userid } = req.params;
    const user = await User.findById(userid);
    res.render('edit', { user });
});

router.patch('/users/:userid', async(req, res) => {
    const { userid } = req.params;
    const { name, age } = req.body;
    await User.findByIdAndUpdate(userid, { name, age });
    res.redirect(`/users/${userid}`);
});


//Delete User
router.delete('/users/:userid', async(req, res) => {
    const { userid } = req.params;
    await User.findByIdAndDelete(userid);
    res.redirect('/users');
});

module.exports = router;