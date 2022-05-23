//* PROCESS OF MAKING A TABLE IN MYSQL
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define("Students", {
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    section: {
      type: DataTypes.INTEGER,
    },
    yearLevel: {
      type: DataTypes.INTEGER,
    },
    birthdate: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    guardianName: {
      type: DataTypes.STRING,
    },
    guardianContact: {
      type: DataTypes.STRING,
    },
  });

  return Students;
};
