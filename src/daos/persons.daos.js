import Person from "../models/persons_model.js";
import GenericDao from "./generic_dao.js";

class Persons_dao extends GenericDao{


constructor(){
    super('persons_tb')
}

async pegaTodosOsRegistros(where = {}){
    return database[this.modelName]
    .findAll({where:{...where}})
  
}


async pegaUmRegistro(where = {}){
    return database[this.modelName]
    .findOne({where: {...where}})
}


}



export default Persons_dao;