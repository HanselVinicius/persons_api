import express from 'express'
import Connection from '../data/sql/connect.js'


const router = express.Router()

const db = new Connection().start_connection()



router.get("/v1/pessoas",async(req,res)=>{
    try {
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.post("/v1/pessoas",async(req,res)=>{
    try {
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})



router.put("/v1/pessoas/:id",async(req,res)=>{
    try {
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.delete("/v1/pessoas/:id",async(req,res)=>{
    try {
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})