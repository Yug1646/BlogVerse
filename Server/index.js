const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require('./Routes/AuthRouter')
const ViewRouter = require('./Routes/ViewRouter');
const Blog= require('./Models/Blog')


const PORT = process.env.PORT || 5000;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());

app.use('/auth',AuthRouter)

app.use('/view',ViewRouter)

//Create Todo 
app.post('/create', async (req, res) => {
  //Grab data from frontend
  const getTitle = req.body.title
  const getDescription = req.body.description
  const getCategory = req.body.category


  //Creating a new obj
  const blog = new Blog({
      title: getTitle,
      description: getDescription,
      category:getCategory
  })

  try {
      await blog.save()
      res.send('Blog Created Successfully')
  }
  catch (err) {
      console.log(err);
  }

})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
