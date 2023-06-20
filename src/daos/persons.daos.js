import person from "../models/persons_model.js";

class Persons_dao{



static async pegaTodosOsRegistros(){
    try {
        let result =  await person.find({isDeleted:false})
        return result;
    } catch (err) {
        console.log(`ERROR PERSONS: ${err}`)
        return err
    }
  
}


static async pegaUmRegistro(cpf){
    try {
        let result = await person.findOne({cpf:cpf,isDeleted: false})
        return result;
    } catch (err) {
        console.log(`ERROR RETRIEVING AN PERSON: ${err} `)
        return err
    }
}

static async insereRegistro(body){
    try {
        let data_to_save = new person(body) 
        const result = data_to_save.save()
        return result;
    } catch (err) {
        console.log(`ERROR INSERTING DATA: ${err}`)
        return err
    }
}


}



export default Persons_dao;