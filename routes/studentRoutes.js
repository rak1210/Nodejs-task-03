const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Mentor = require('../models/mentor');

// Create Student
router.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Assign Student to Mentor
router.post('/students/:studentId/assign-mentor/:mentorId', async (req, res) => {
  try {
    const { studentId, mentorId } = req.params;
    const student = await Student.findByIdAndUpdate(studentId, { mentor: mentorId }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Show all students for a particular mentor
router.get('/mentors/:mentorId/students', async (req, res) => {
  try {
    const students = await Student.find({ mentor: req.params.mentorId });
    res.json(students);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Show the previously assigned mentor for a particular student
router.get('/students/:studentId/mentor', async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('mentor');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student.mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;