const { Sequelize, DataTypes } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('final_comercial', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
  logging: false,
});

// Modelos
const Persona = require('./persona')(sequelize, DataTypes);
const Pais = require('./pais')(sequelize, DataTypes);
const Continente = require('./continente')(sequelize, DataTypes);
const Pasaporte = require('./pasaporte')(sequelize, DataTypes);

// Relaciones
Pasaporte.belongsTo(Persona, { foreignKey: 'idPersona' });
Pasaporte.belongsTo(Pais, { foreignKey: 'idPais' });
Pasaporte.belongsTo(Continente, { foreignKey: 'idContinente' });

Persona.hasMany(Pasaporte, { foreignKey: 'idPersona' });
Pais.hasMany(Pasaporte, { foreignKey: 'idPais' });
Continente.hasMany(Pasaporte, { foreignKey: 'idContinente' });

module.exports = { sequelize, Persona, Pais, Continente, Pasaporte };
