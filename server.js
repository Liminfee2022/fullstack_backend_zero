require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');

const app = express();
const port = process.env.PORT || 8088;

//config template engine
configViewEngine(app);

//Route
app.use('/test', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})