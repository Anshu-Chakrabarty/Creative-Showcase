const router = require('express').Router();
const Post = require('../models/Post');

router.post('/', async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async(req, res) => {
    try {
        const posts = await Post.aggregate([{ $sample: { size: 20 } }]);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:username', async(req, res) => {
    try {
        const posts = await Post.find({ username: req.params.username }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;