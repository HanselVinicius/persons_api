import express from 'express'
import Persons_dao from '../daos/persons.daos.js'



const router = express.Router()



router.get("/v1/pessoas",async(req,res)=>{
    try {
        let data = Persons_dao.pegaTodosOsRegistros()
        res.status(200).send(await data)
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.get("/v1/pessoas:cpf",async(req,res)=>{
    try {
        let data = Persons_dao.pegaUmRegistro(req.params.cpf)
        res.status(200).send(await data)
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.post("/v1/pessoas",async(req,res)=>{
    try {
        const novaPessoa = req.body
        let data = Persons_dao.insereRegistro(novaPessoa)
        res.status(202).send(await data)

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