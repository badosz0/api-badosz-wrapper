# Api Badosz Wrapper

Official Wrapper for api.badosz.com

[![Server](https://img.shields.io/discord/340947847728070666.svg?logo=discord&colorB=7289DA)](https://discord.gg/ZwPfRfp)
[![Github contributors](https://img.shields.io/github/contributors/badosz0/api-badosz-wrapper.svg)](https://github.com/badosz0/api-badosz-wrapper/contributors)
[![GitHub issues](https://img.shields.io/github/issues/badosz0/api-badosz-wrapper.svg)](https://github.com/badosz0/api-badosz-wrapper/issues)
[![GitHub forks](https://img.shields.io/github/forks/badosz0/api-badosz-wrapper.svg)](https://github.com/badosz0/api-badosz-wrapper/network)
[![GitHub stars](https://img.shields.io/github/stars/badosz0/api-badosz-wrapper.svg)](https://github.com/badosz0/api-badosz-wrapper/stargazers)

### Example

```js
const client = require('./index.js')
const api = new client('TOKEN')

async function test() {
  console.log(await api.endpoints.advice())
}

test()
```

returns

```json
{ advice: 'Never run a marathon in Crocs.' }
```

If endpoint requires parameters you can pass them in function:

```js
await api.endpoints.cmm({text: 'Github is cool!'})
```
