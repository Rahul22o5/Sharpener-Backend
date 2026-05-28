const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

//get all course list
router.get("/",(req,res)=>{
    const courseName = courses.map(c => c.name).join(", ");
    res.send(`Courses: ${courseName}`);
})
//course details
router.get("/:id",(req,res)=>{
    const courseId = req.params.id;
    const course = courses.find(c => c.id == courseId);
    if (!course) {
        res.send("Course not found");
    }
    res.send(`Course: ${course.name}, Description: ${course.description}`)
})

module.exports = router;