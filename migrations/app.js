require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

// Middleware para parsear JSON
app.use(express.json());

// Rotas
const taskRoutes = require('./routes/tasks');
app.use('/api', taskRoutes);

// Sincronizar o banco de dados e iniciar o servidor
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

