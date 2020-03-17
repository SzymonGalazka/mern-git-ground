const express = require("express");
const connectDB = require("./config/db.js");

const users = require("./routes/api/users.js");
const posts = require("./routes/api/posts.js");
const auth = require("./routes/api/auth.js");
const profile = require("./routes/api/profile.js");

const app = express();

//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

//Define Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/auth", auth);
app.use("/api/profile", profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
