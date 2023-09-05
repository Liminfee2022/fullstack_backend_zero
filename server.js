const express = require('express')
require('dotenv').config();

console.log('dfg:', process.env);

const app = express();
const port = process.env.PORT || 8088;
//config template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('example.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})