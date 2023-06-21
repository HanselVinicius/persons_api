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
        data_to_save['cpf'] = data_to_save['cpf'].replaceAll('.','').replace('-','')
        const result = data_to_save.save()
        return result;
    } catch (err) {
        console.log(`ERROR INSERTING DATA: ${err}`)
        return err
    }
}

static async trocaRegistro(cpf,body){
    try {
        let data_to_save = body
        data_to_save['cpf'] = data_to_save['cpf'].replaceAll('.','').replace('-','')
        let result = await person.findOneAndReplace({cpf:cpf},data_to_save)
        return result;
    } catch (err) {
        console.log(`ERROR INSERTING DATA: ${err}`)
        return err
    }
}

static async deletaRegistro(cpf){
    try {
        let result = await person.findOneAndDelete({cpf:cpf})
        return result;
    } catch (err) {
        console.log(`ERROR INSERTING DATA: ${err}`)
        return err
    }
}

static async softDelete(cpf){
    try {
        let result = await person.findOneAndUpdate({cpf:cpf},{isDeleted:true})
        return result;
    } catch (err) {
        console.log(`ERROR INSERTING DATA: ${err}`)
        return err
    }
}


}



export default Persons_dao;