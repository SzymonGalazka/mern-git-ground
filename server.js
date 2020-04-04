const express = require("express");
const connectDB = require("./config/db.js");
const path = require("path");

const users = require("./routes/api/users.js");
const posts = require("./routes/api/posts.js");
const auth = require("./routes/api/auth.js");
const profile = require("./routes/api/profile.js");

const app = express();

//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/auth", auth);
app.use("/api/profile", profile);

// Serve static assets for production
if (process.env.NODE_ENV == "production") {
  // Set static folder
  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
