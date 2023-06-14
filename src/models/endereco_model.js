import { DataTypes } from "sequelize";
import sequelize from "../data/sql/connection_config.js";


const Endereco = sequelize.define (
    'endereco_tb',{
        rua:{
            type: DataTypes.STRING,
            allowNull:false
        },
        numero:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        complemento:{
            type:DataTypes.STRING,
            allowNull:false
        },
        bairro:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cidade:{
            type:DataTypes.STRING,
            allowNull:false
        },
        uf:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isDeleted:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    }
)





export default Endereco