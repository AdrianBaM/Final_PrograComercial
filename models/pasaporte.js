module.exports = (sequelize, DataTypes) => {
  const Pasaporte = sequelize.define('Pasaporte', {
    numero_pasaporte: DataTypes.STRING,
    fecha_emision: DataTypes.DATE,
    fecha_expiracion: DataTypes.DATE,
  }, {
    timestamps: false  
  })
    return Pasaporte
}