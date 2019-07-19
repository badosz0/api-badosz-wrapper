const client = require('./index.js')
const api = new client('TOKEN')

async function test() {
  console.log(await api.endpoints.advice())
  console.log(await api.endpoints.cmm({text:'test'}))
}

test()
