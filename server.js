const express = require('express')
const { sequelize } = require('./models')
const pasaporteRoutes = require('./routes/pasaporteRoutes')

const app = express()
app.use(express.json())

app.use('/api/pasaportes', pasaporteRoutes);

const PORT = 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});
