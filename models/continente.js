module.exports = (sequelize, DataTypes) => {
    const Continente = sequelize.define('Continente', {
      nombre: DataTypes.STRING,
    }, {
      timestamps: false  
    })
    return Continente
}
  