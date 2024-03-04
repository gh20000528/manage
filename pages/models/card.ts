
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../utils/db';
import User from './user';

export default class Card extends Model {
}

Card.init({
  // Model attributes are defined here
    title: {
        type: DataTypes.STRING
    },
    intro: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.STRING
    },
    finish: {
        type: DataTypes.BOOLEAN
    },
    daybegin: {
        type: DataTypes.STRING
    },
    deadline: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER,
    }
}, {
  sequelize, 
  modelName: 'Card' 
});


// associated
User.hasMany(Card, { foreignKey: 'userId', as: 'cards' });
Card.belongsTo(User, { foreignKey: 'userId' });


