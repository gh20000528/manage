import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../utils/db';

export default class User extends Model {
}

User.init({
  // Model attributes are defined here
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {

  sequelize,
  modelName: 'Users' 
});




