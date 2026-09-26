const express = require("express");
const router = express.Router();
const { getSubjectsBySemester } = require("../controllers/semesterController");

router.get("/:semesterId/subjects", getSubjectsBySemester);

module.exports = router;
