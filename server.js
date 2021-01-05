const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_ATLAS, 
//   {   w: "majority",
//       useNewUrlParser: true, 
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});