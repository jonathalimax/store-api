var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var products = [
  {
    id: 1,
    nome: 'Capa protetora notebook',
    categoria: 'Notebook',
    marca: 'Apple',
    preco: '$59.99',
    tamanho: '20 cm',
    cor: 'Dourado',
    foto: '/images/acessories/notebook_case.jpg'
  },
  {
    id: 2,
    nome: 'Bateria portátil',
    categoria: 'Bateria',
    marca: 'Dell',
    preco: '$19.99',
    tamanho: '5 cm',
    cor: 'Preto',
    foto: '/images/acessories/charger_portable.jpg'
  },
  {
    id: 3,
    nome: 'Mouse',
    categoria: 'Informática',
    marca: 'Razor',
    preco: '$109.99',
    tamanho: '10 cm',
    cor: 'Azul',
    foto: '/images/acessories/mouse_razer.jpg'
  },
];

var currentId = 3;

app.use(express.static(__dirname));

app.get('/products', function(req, res) {
  res.send({ products: products });
});

app.listen(PORT, function() {
  console.log("Server running on port" + 3000);
});
