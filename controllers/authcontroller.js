const userModel= require("../models/user-model");
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const {generatetoken} = require("../utils/generatetoken");
const express= require('express');
const router= express.Router();
const isloggedin = require("../middlewares/isloggedin");
const productModel= require("../models/product-model")



module.exports.registerUser = async  (req,res)=>{
  try{                                                
    let{email,password,fullname}= req.body;     
  let user = await userModel.findOne({email:email});  
  if(user) return res.status(401).send("you already have an account");
  

    bcrypt.genSalt(10,(err,salt)=>{
       bcrypt.hash(password,salt, async function(err,hash){
     
          if(err) return res.send(err.message);
          else{
                let user = await userModel.create({
                 email,
                 password:hash,
                  fullname
            });
       let token = generatetoken(user);
      res.cookie("token",token);
    res.redirect("/shop");
  
          }
       })
          })
       }  
 
  catch(err){
    res.send(err.message);
  }
}

module.exports.loginUser = async (req,res)=>{
    let{ email, password }= req.body;
     console.log(req.body);

    let user= await userModel.findOne({email:email});
    console.log(user);
    if(!user)  {
      req.flash("error", "please create an account");
    res.redirect("/");
    }
   
  else{  
    bcrypt.compare(password, user.password , async function(err, result) {
      console.log(result);
    if(result){
     let token =generatetoken(user);
     const products =  await  productModel.find();
     res.cookie("token",token);
    //  res.render("shop",{ products: products });
    res.redirect("/shop");
     
    }
  
    else{
      req.flash("error", "incorrect  password");
        res.redirect("/");
    }
  });
} 
};