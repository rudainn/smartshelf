const pool = require("../config/db");

// GET /api/semesters/:semesterId/subjects
exports.getSubjectsBySemester = async (req, res) => {
    try {
        const { semesterId } = req.params;
        const [rows] = await pool.query(
            "SELECT * FROM SUBJECT WHERE semester_id = ? ORDER BY subject_name",
            [semesterId]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
