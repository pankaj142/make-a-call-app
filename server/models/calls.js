const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Call = sequelize.define("calls", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
        validate : {
          len : {
            args : [5,50],
            msg:'Please enter username with min 5 chars and maz 50 char'
          }
        }
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      receiver_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Call;
  };