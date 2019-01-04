'use strict'

const express = require('express');
const PostController = require('../controllers/post');
const router = express.Router();

router.post('/post', PostController.createPost);
router.get('/posts', PostController.getPosts);
router.get('/post/:id', PostController.getPostById);
router.patch('/post/:id', PostController.updatePost);
router.delete('/post/:id', PostController.deletePost);

module.exports = router;
