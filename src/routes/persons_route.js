import express from 'express'
import Connection from '../data/sql/connect.js'
import Persons_dao from '../daos/persons.daos.js'


const router = express.Router()

const db = new Connection().start_connection()
const dao = new Persons_dao()


router.get("/v1/pessoas",async(req,res)=>{
    try {
        const result = await dao.find_all()
        res.status(200).send(result)
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.post("/v1/pessoas",async(req,res)=>{
    try {
        const novaPessoa = req.body
        
        
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


export default router;