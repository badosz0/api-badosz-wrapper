const {get} = require('snekfetch')
const endpoints = require('./endpoints.json')

class ApiClient {
  constructor(token) {
    const self = this
    this.token = token
    this.endpoints = {}
    this.baseURL = 'https://api.badosz.com'
    Object.keys(endpoints.sfw).forEach(async endpoint => {
      this.endpoints[endpoint] = async function(params = {}) {
        const response = await get(`${self.baseURL}${endpoints.sfw[endpoint]}`)
        .set({
              Authorization: self.token
             })
        .query(params)
        return response.body
      }
    })
  }
}

module.exports = ApiClient
