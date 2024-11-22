module.exports = (sequelize, DataTypes) => {
    const Pais = sequelize.define('Pais', {
      nombre: DataTypes.STRING,
    }, {
      timestamps: false  
    })
    return Pais
}
  