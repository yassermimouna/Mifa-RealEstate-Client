const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'https://mifa-realestate-server.vercel.app',
      changeOrigin: true,
    })
  );
};