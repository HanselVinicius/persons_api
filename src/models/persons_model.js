import mongoose from "mongoose";


const schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  data_de_nascimento: {
    type: Date,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  endereco: {
    type: Object
  },
  cpf: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},{
  versionKey:false
}   );

const person = mongoose.model('persons', schema);

export default person;
