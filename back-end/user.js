const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model {}

User.init({
    document: {
       type: DataTypes.STRING
    },
    equipment: {
        type: DataTypes.STRING
    },
    clothes: {
        type: DataTypes.STRING
    }
},  {
   sequelize,
   modelName: 'user',
   timestamps: false
})

module.exports = User;