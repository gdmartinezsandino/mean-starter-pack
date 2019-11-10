'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
    title: String,
    description: String,
    created_at: String,
    last_update: String,
});

module.exports = mongoose.model('Post', PostSchema);