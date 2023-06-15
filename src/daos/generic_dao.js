import database from '../models';


class GenericDao {
    constructor(modelName){
        this.modelName = modelName;
    }


    async pegaTodosOsRegistros (where = {}){
        return database[this.modelName].findOne({where: {...where}})
    }

    async pegaUmRegistro(where = {}){
        return database[this.modelName].findOne({where: {...where}})
    }



}

export default GenericDao