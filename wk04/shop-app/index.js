// products-service/index.js

const express = require('express');
const app = express();

const productsRoutes = require('./routes/productsRoutes');

app.use('/products', productsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Products service is running on port ${PORT}`);
});
