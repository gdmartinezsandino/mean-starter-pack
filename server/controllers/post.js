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
                message: '[ERROR] - Guardando post'
            })
        } else {
            res.status(200).send({
                message: 'Post guardado con exito'
            })
        }
    })
}

function getPosts (req, res) {
    Post.find({}, function (err, posts) {
        if (err) {
            res.status(500).send({
                message: '[ERROR] - No se han encontrado posts'
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
                message: 'No se ha encontrado el post'
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
                message: 'No se ha encontrado el post'
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
                        message: 'Error al actualizar el post'
                    })
                } else {
                if (!updated) {
                    res.status(404).send({
                    message: 'No se ha actualizo el post'
                    })
                } else {
                    let postToSend = updated.toObject();
                    res.status(200).send({
                        message: 'post actualizado con exito',
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
                message: 'Error al eliminar un post'
            })
        } else {
            if (!postRemoved) {
                res.status(404).send({
                meesage: 'Error encontrando el post'
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