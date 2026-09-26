const pool = require("../config/db");

// GET /api/courses
exports.getAllCourses = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM COURSE ORDER BY course_name");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/courses/:courseId/semesters
exports.getSemestersByCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const [rows] = await pool.query(
            "SELECT * FROM SEMESTER WHERE course_id = ? ORDER BY semester_no",
            [courseId]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
