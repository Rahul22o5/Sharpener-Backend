const express = require('express');
const router = express.Router();

//sample data acting as API
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

//get all student list
router.get("/",(req,res)=>{
    const student = students.map(s => s.name).join(", ");
    res.send(`Students: ${student}`);
})
//student details
router.get("/:id",(req,res)=>{
    const studentId = req.params.id;
    const student = students.find(s => s.id == studentId);
    if (!student) {
        res.send("Student not found");
    }
    res.send(`Student: ${student.name}`);
})

module.exports = router;