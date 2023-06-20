import express from "express"
import router from "./src/routes/persons_route.js";
import connect from "./src/data/mongo/connect_mongo.js";

const app = express()
const port = process.env.PORT || 3000
connect()

app.use(express.json({ limit: "200mb",extended: true }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));


app.get("/", (req,res)=>{
    res.json({message:"oi henrique"})
})

app.use("/",router)

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})