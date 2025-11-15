require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todo-app";

connectDB(MONGO_URI);

app.use("/api/v1/tasks", taskRoutes);
app.get("/", (req, res) => res.send("ToDo API is running"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
