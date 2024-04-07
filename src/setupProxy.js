const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://c1b4-34-86-209-30.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
