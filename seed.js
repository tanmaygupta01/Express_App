const mongoose = require('mongoose');
const User = require('./models/user');

const DUMMY_USERS = [{
        name: 'Kishore',
        age: 60,
    },
    {
        name: 'Karan',
        age: 20,
    }
]

async function seedDB() {
    await User.deleteMany({});
    await User.insertMany(DUMMY_USERS);
    console.log('DB Seeded');
}

module.exports = seedDB;