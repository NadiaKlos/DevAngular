const express = require('express');
const router = express.Router();
const Lesson = require('../models/lesson.model');

router.get('/lessons', async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.json(lessons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
