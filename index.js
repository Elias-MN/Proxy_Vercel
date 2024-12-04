const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy todas las solicitudes desde /api al backend en tu servidor
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://informatica.iesalbarregas.com:7007/game',
    changeOrigin: true,
  })
);

// Endpoint para probar que el proxy funciona
app.get('/', (req, res) => {
  res.send('Proxy funcionando en Vercel');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor proxy escuchando en el puerto ${port}`);
});
