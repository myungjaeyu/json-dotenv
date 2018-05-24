const fs = require('fs'),
      path = require('path');

module.exports = (file = '.env.json') => (obj => Object.assign(process.env, process.env, obj))
                                         ((is => typeof is === 'object' && is || {})
                                         ((path => JSON.parse(fs.readFileSync(path, 'utf8')))
                                         (path.resolve(__dirname, file))));