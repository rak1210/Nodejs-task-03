const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor');

// Create Mentor
router.post('/mentors', async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;