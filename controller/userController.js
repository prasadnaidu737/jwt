const { use } = require("../../authenticate/route/userRoute")

var userArr=[
    {username:"ram",password:"ram"}
]

function addUser(user){
const pos=userArr.findIndex(i=>i.username==user.username)
if(pos>=0){
    return ({msg:"user already exist",statuCode:401})
}else{
    userArr.push(user)
    return({msg:"user added successfully", statuCode:200})
}
}

function checkUser(user){
    const pos = userArr.findIndex((i) => i.username == user.username);
    if (pos >= 0) {
        if(userArr[pos].password==user.password){
            return({msg:true,statuCode:200})
        }else{
            return({msg:false,statuCode:401})
        }
    } else {
      return { msg:false, statuCode: 401 };
    }
}

module.exports={addUser,checkUser}