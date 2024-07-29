const ensureAuth = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/", ensureAuth, (req,res) =>{
    console.log('---- Logged In user details ----',req.user);
    res.status(200).json([
        {
            name : 'yug',
            age : 18
        },
        {
            name : 'Raj',
            age : 18
        }
    ])
});


module.exports = router;
