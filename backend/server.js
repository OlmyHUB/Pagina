const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos en memoria (sin DB)
let items = [{ id: 1, name: "Primer item" }];

// Rutas
app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.json(newItem);
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
