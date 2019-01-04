'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: String,
    name: String,
    lastname: String,
    email: String,
    password: { type: String, select: false },
    image: String,
    role: String,
    phone: String,
    city: String,
    country: String,
    create_at: String,
    last_login: String,
    state: String,
    company: { type: Schema.ObjectId, ref: 'User' },
    company_name: String,
    about: String,
});

module.exports = mongoose.model('User', UserSchema);