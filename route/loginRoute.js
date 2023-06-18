const express = require("express");
const path = require("path");
const jwt=require("jsonwebtoken")
const { checkUser } = require("../controller/userController");

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  const filePath = path.join(req.rootfolder, "public", "login.html");
  res.sendFile(filePath);
});

loginRouter.post("/", (req, res) => {
  const userToBeChecked = {
    username: req.body.txtUserName,
    password: req.body.txtPassword,
  };
  const result = checkUser(userToBeChecked);
  if (result.msg) {
    const payload=userToBeChecked.username
    const secret = "vani";
    // const options={expiresIn:"2d",issuer:"http://localhost"}
    
     jwt.sign(payload,secret,(err,token)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.send({ msg: "user authenticated" ,token:token});
        }
     })
  } 
  else{
    res.send("user password or username wrong");

  }
});

module.exports = { loginRouter };
