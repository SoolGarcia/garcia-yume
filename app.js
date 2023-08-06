const express=require("express")
const app=express()
const path=require("path")

const PORT=3000

app.listen(PORT, ()=>console.log ("escuchando al puerto: ", PORT))

app.use(express.static("public"))


//rutas
 
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})

app.get("/detalleProducto", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/productDetail.html"))
})

app.get("/carrito", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/carrito.html"))
})

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
})

app.get("/registro", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/registro.html"))
})
