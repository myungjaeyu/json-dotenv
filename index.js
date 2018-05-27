const fs = require('fs'),
      path = require('path');

module.exports = (file = '.env.json') => (filtered => Object.assign(process.env, filtered))
                                         ((obj => Object.keys(obj).reduce( (acc, v) => {
                                            !process.env.hasOwnProperty(v) &&
                                                (acc[v] = (!Array.isArray(obj[v]) && typeof obj[v] === 'object') && JSON.stringify(obj[v]) || obj[v])
                                            return acc;
                                         }, {}))
                                         ((to_string => JSON.parse(to_string))
                                         ((path => fs.readFileSync(path, 'utf-8'))
                                         ((name => path.resolve(process.cwd(), name))
                                         (file)))));