const ensureAuth = require("../Middlewares/Auth");
const Blog = require("../Models/Blog");
const router = require("express").Router();

router.get("/data", (req,res) =>{
    Blog.find({})
    .then((data)=>{
        res.send(data)
    })
    .catch(()=>{
        res.send(error)
    })
});


module.exports = router;
