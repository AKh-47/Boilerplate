const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");

const app = express();
require("dotenv").config();
// PORT =
// MONGO_URI =
// EMAIL =
// PASS =
// SECRET =

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}...`)
);
