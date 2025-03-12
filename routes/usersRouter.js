const express = require('express');
const router= express.Router();
const {registerUser, loginUser,logout} =require("../controllers/authcontroller");


router.post("/register", registerUser );

router.post("/login", loginUser);

router.get("/logout" , function(req,res){
     res.cookie("token","");
     res.redirect("/");
})
    
module.exports= router;