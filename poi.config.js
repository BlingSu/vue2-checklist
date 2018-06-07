const path = require(`path`)

module.exports = {
  entry: path.resolve(__dirname, './dev/index.js'),
  vendor: false,
  filename: {
    js: 'vue2-checklist.js'
  }
}
