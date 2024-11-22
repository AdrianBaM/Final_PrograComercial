module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('Persona', {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      fecha_nacimiento: DataTypes.DATE,
    }, {
      timestamps: false
    })
    return Persona
}

  