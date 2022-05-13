const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const notes = require("./routes/notesRoute");

const registration = require("./routes/registerRoute");
const login = require("./routes/loginRoute");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/notes", notes);
app.use("/api/signup", registration);
app.use("/api/signin", login);

app.get("/", (req, res) => {
  res.send("Notes API Perfectly Working!");
});

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
