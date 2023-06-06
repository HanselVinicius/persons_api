import express from "express"
import Connection from "./src/data/sql/connect.js";

const app = express()
const port = process.env.PORT || 3000
const db = new Connection()

db.start_connection()
app.use(express.json({ limit: "200mb",extended: true }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));


app.get("/", (req,res)=>{
    res.json({message:"oi henrique"})
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})