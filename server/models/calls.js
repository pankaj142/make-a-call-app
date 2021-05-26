module.exports = (sequelize, Sequelize) => {
    const Call = sequelize.define("calls", {
      username: {
        type: Sequelize.STRING
      },
      user_phone: {
        type: Sequelize.STRING
      },
      receiver_phone: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
    });
    return Call;
  };