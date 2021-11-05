const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
const crud = require("./routes/crud.js");


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(crud);

mongoose.connect(
  "mongodb+srv://mike:kinect123@cluster0.r4u1v.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})