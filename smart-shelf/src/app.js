const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const courseRoutes = require("./routes/courseRoutes");
const semesterRoutes = require("./routes/semesterRoutes");
const subjectRoutes = require("./routes/subjectRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Smart Shelf API is running"
    });
});

app.use("/api/courses", courseRoutes);
app.use("/api/semesters", semesterRoutes);
app.use("/api/subjects", subjectRoutes);

module.exports = app;
