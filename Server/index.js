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

//Create Blog 
app.post('/create', async (req, res) => {
  //Grab data from frontend
  const getTitle = req.body.title
  const getDescription = req.body.description
  const getCategory = req.body.category
  const user = req.body.user


  //Creating a new obj
  const blog = new Blog({
      title: getTitle,
      description: getDescription,
      category:getCategory,
      user : req.body.user

  })

  try {
      await blog.save()
      res.send('Blog Created Successfully')
  }
  catch (err) {
      console.log(err);
  }

})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id
  await Blog.findByIdAndDelete(id).exec();
  res.send("Blog Deleted !")
})

app.put('/update/:id', async (req, res) => {

  const { newTitle, newDescription, newCategory} = req.body
  const id = req.params.id

  try {
      const blog = await Blog.findById(id)
      if (!blog) {
          return res.status(404).send("Blog not found")
      }
      blog.title = newTitle
      blog.description = newDescription
      blog.category=newCategory
      await blog.save()
      res.status(200).send(blog)
  }
  catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
