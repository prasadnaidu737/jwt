const express=require("express")
const path=require("path");
const { addUser } = require("../controller/userController");

const userRouter=express.Router()


userRouter.get("/",(req,res)=>{
 const filePath = path.join(req.rootfolder, "public", "register.html");
 res.sendFile(filePath)
})

userRouter.post("/",(req,res)=>{

    const userToBeAdded = {
      username: req.body.txtUserName,
      password: req.body.txtPassword,
    };
const result=addUser(userToBeAdded)
if(result.statuCode==200){

//  const filePath = path.join(req.rootfolder, "public", "login.html");

    res.redirect("/login")
}else{
 const filePath = path.join(req.rootfolder, "public", "register.html");

 res.sendFile(filePath)

}
})


module.exports={userRouter}