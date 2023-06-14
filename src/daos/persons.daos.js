import Person from "../models/persons_model.js";

class Persons_dao{

async find_all(){
    try{
        const users = await Person.findAll()
        return users;
    }catch(error){
        console.log(`ERROR RETRIEVING PERSONS: ${error}`)
        return error
    }
}





}



export default Persons_dao;