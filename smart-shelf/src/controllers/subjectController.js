const pool = require("../config/db");

// GET /api/subjects/:subjectId/materials
exports.getMaterialsBySubject = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const [rows] = await pool.query(
            "SELECT * FROM STUDY_MATERIAL WHERE subject_id = ? ORDER BY uploaded_at DESC",
            [subjectId]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
