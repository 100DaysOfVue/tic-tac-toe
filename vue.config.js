// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/tic-tac-toe/dist/index.html'
    : '/'
}
