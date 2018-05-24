const test = require('ava');
require('../index')();

test('exam', t => {

    const exam1 = process.env.EXAMPLE_NAME === 'json-dotenv',
          exam2 = process.env.EXAMPLE_PORT === '3343',
          exam3 = process.env.EXAMPLE_VERS === '1.3011',
          exam4 = process.env.EXAMPLE_LIST === '1,2,3';

    t.true(exam1);
    t.true(exam2);
    t.true(exam3);
    t.true(exam4);

});