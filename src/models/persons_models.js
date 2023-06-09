import { DataTypes } from "sequelize";
import sequelize from "../data/sql/connection_config.js";


const Person = sequelize.define(
    'persons_tb',{
        nome:{
            type: DataTypes.STRING,
            allowNull:false
        },
        idade: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        data_de_nascimento: {
            type:DataTypes.DATE,
            allowNull:false
        },
        id_endereco: {
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'endereco_tb',
                key: 'id'
            }
        }, 
        cpf:{
            type: DataTypes.STRING,
            allowNull:false
        },
        isDeleted:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }



    }
)