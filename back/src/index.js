const express = require('express')
const app = express()
const port = 3001
app.get('/', (req, res) => {
  res.status(200).send('Automação S2');
})

const energy_model = require('./energyRepository')

var cors = require('cors')

var app = express()
app.use(cors())

app.get('/consumo', (req, res) => {
    energy_model.getConsumo()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})