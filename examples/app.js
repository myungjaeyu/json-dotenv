// require('../index.js')('.env.json');
require('../index.js')();

console.log(process.env.EXAMPLE_NAME || '');
console.log(process.env.EXAMPLE_PORT || '');
console.log(process.env.EXAMPLE_VERS || '');
console.log(process.env.EXAMPLE_LIST || '');
console.log(process.env.EXAMPLE_OBJS || '');
console.log(process.env.npm_config_git);