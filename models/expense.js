const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    date:{
        type:Sequelize.STRING,
        allowNull:false
    },
    amount:{
        type:Sequelize.STRING,
        allowNull:false
    },
    reason:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports= Expense; 