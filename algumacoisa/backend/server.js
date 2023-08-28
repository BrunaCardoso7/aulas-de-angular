// server.js
const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const sequelize = require('./src/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
