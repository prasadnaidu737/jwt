const jwt=require("jsonwebtoken")

function validateToken(req,res,next){

    const headertoken = req.headers.authorization
    if(headertoken){
      const token = headertoken.split(" ")[1]
      console.log("111",token)
      const secret = "vani";
    jwt.verify(token,secret,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            req.authenticated=true
            next()
        }
    });


    }else{
        res.send("token missing")
    }


}


module.exports={validateToken}