const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const notesRoute = require("./routes/notes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", notesRoute);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

//notifies if there is any error with connecting to the DB
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully connected to the Database.");
});

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('client/build'));

//   app.get('*', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
//   });
// }


// Step 1:
app.use(express.static(path.join(__dirname, "./client/build")));
// Step 2:
app.use(function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
