module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Todo;
}
