const fs = require('fs');
const path = require('path');
const moment = require('moment');
const Post = require('../models/post');
const jwt = require('../services/jwt');

function createPost (req, res) {
    let post = new Post();
    let params = req.body;
    
    post.title = params.title;
    post.description = params.description;
    post.create_at = moment().unix();
    post.last_update = '';

    post.save((err, registerStored) => {
        if (err) {
            res.status(500).send({
                message: '[ERROR] - Saving post'
            })
        } else {
            res.status(200).send({
                message: 'Post saved successful'
            })
        }
    })
}

function getPosts (req, res) {
    Post.find({}, function (err, posts) {
        if (err) {
            res.status(500).send({
                message: '[ERROR] - There are no posts created'
            })
        } else {
            res.status(200).send({
                posts: posts
            })
        }
    })
}

function getPostById (req, res) {
    let id = req.params.id;
    Post.findById(id, (err, post) => {
        if (err) {
            res.status(500).send({
                message: '[ERROR] Post not found'
            })
        } else {
            res.status(200).send({
                post: post
            })
        }
    })
}

function updatePost (req, res) {
    let id = req.params.id;
    let dataNew = req.body;

    if (dataNew._id) {
        delete dataNew._id;
    }

    Post.findById(id, (err, postToUpdate) => {
        if (err) {
            res.status(500).send({
                message: '[ERROR] Post not found'
            })
        } else {
            for (let property in dataNew) {
                if (dataNew[property] !== postToUpdate[property] && dataNew[property] !== '') {
                    postToUpdate[property] = dataNew[property];
                }
            }
        
            postToUpdate.save((err, updated) => {
                if (err) {
                    res.status(500).send({
                        message: '[ERROR] Updating post'
                    })
                } else {
                if (!updated) {
                    res.status(404).send({
                    message: '[ERROR] Post not updated'
                    })
                } else {
                    let postToSend = updated.toObject();
                    res.status(200).send({
                        message: 'Post updated successful',
                        post: postToSend
                    })
                }
                }
            })
        }
    })
}

function deletePost () {
    const id = req.params.id;
    Post.findByIdAndRemove(id, (err, postRemoved) => {
        if (err) {
            res.status(500).send({
                message: '[ERROR] Deleting post'
            })
        } else {
            if (!postRemoved) {
                res.status(404).send({
                meesage: '[ERROR] Post not found'
                })
            } else {
                let postToSend = updated.toObject();
                res.status(200).send({
                    postRemoved: postToSend
                })
            }
        }
    })
}

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
}