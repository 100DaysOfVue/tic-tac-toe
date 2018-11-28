// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/https://github.com/100DaysOfVue/tic-tac-toe'
    : '/'
}
