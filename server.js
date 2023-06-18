const express=require("express")

const app =express()
const path = require("path")
const {userRouter}=require("./route/userRoutes")
const {loginRouter}=require("./route/loginRoute")
const {validateToken}=require("./utils")

const PORT = process.env.PORT ||3000

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use(express.static("public"))

app.use((req,res,next)=>{
    req.rootfolder=__dirname
    next()
})

app.use("/register", userRouter);
app.use("/login",loginRouter);
app.get("/products",validateToken,(req,res)=>{
    res.send("user authenticated and autherised")
})

app.get("/",(req,res)=>{
    const filePath=path.join(__dirname,"public","index.html")
    res.send(filePath)
})

app.listen(PORT,()=>{
    console.log("listening to port "+PORT)
})