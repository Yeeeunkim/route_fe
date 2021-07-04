const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7070', //Target은 Node.js의 포트를 확인하여 넣어주자/
      changeOrigin: true,
    })
  );
};