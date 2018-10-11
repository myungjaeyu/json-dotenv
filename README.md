# json-dotenv

[![Travis](https://img.shields.io/travis/myungjaeyu/json-dotenv/master.svg)](https://travis-ci.org/myungjaeyu/json-dotenv)
[![NPM Version](https://img.shields.io/npm/v/json-dotenv.svg)](https://www.npmjs.com/package/json-dotenv)

[![NPM Badge](https://nodei.co/npm/json-dotenv.png?downloads=true)](https://www.npmjs.com/package/json-dotenv)

```
npm i --save json-dotenv
```

## Usage
Create an `.env.json` file at the root.
```json
{
    "EXAMPLE_NAME" : "json-dotenv",
    "EXAMPLE_PORT" : 3343,
    "EXAMPLE_VERS" : 1.3011,
    "EXAMPLE_LIST" : [
        1,
        2,
        3
    ],
    "EXAMPLE_OBJS" : {
        "first" : 1,
        "second" : 2,
        "third" : {
            "a" : 1,
            "b" : 2,
            "c" : {
                "c_a" : 31,
                "c_b" : 32,
                "c_c" : 33
            }
        }
    },    
    "npm_config_git" : "filtered"
}
```

Set the variables into process.env.
```javascript
require('json-dotenv')(); // require('json-dotenv')('.env.json');

console.log(process.env.EXAMPLE_NAME || '');
console.log(process.env.npm_config_git); // 'git'
```

Assigning a property on process.env will implicitly convert the value to a string.
```javascript
console.log(JSON.parse(process.env.EXAMPLE_OBJS));
```

## License
[MIT](LICENSE)