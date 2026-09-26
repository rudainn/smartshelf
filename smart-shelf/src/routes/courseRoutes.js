const express = require("express");
const router = express.Router();
const { getAllCourses, getSemestersByCourse } = require("../controllers/courseController");

router.get("/", getAllCourses);
router.get("/:courseId/semesters", getSemestersByCourse);

module.exports = router;
