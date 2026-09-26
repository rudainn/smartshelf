const express = require("express");
const router = express.Router();
const { getMaterialsBySubject } = require("../controllers/subjectController");

router.get("/:subjectId/materials", getMaterialsBySubject);

module.exports = router;
