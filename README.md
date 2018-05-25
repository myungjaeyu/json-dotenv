# json-dotenv

[![NPM Version](https://img.shields.io/npm/v/json-dotenv.svg)](https://www.npmjs.com/package/json-dotenv)

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
    "npm_config_git" : "filtered"
}
```

Set the variables into process.env.
```javascript
require('json-dotenv')(); // require('json-dotenv')('.env.json');

console.log(process.env.EXAMPLE_NAME || '');
console.log(process.env.npm_config_git); // 'git'
```

## License
[MIT](LICENSE)