const {get} = require('snekfetch')
const endpoints = require('/endpoints.json')

class ApiClient {
  constructor(token) {
    this.token = token
    this.endpoints = {}
    this.baseURL = 'https://api.badosz.com'
    Object.keys(endpoints.sfw).forEach(async endpoint => {
      self.endpoints[endpoint] = async function(params = {}) {
        get(`${this.baseURL}${endpoints.sfw[endpoint]}`)
        .set({
              Authorization: Mike.tokens.badosz
             })
        .query(params)
        .then(async response => {
          return response.body
        })
      }
    })
  }
}
