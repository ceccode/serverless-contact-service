'use strict'

const EmailService = require('./lib/emailService')
const EmailValidator = require('./lib/emailValidator')
const ses = require('./lib/ses')

module.exports.email = (event, context, callback) => {

  let data = (event.body) ? JSON.parse(event.body) : {}

  let emailService = new EmailService(ses)
  let emailValidator = new EmailValidator()

  if (!emailValidator.isValid(data.email)) {
    return callback('[400] Validation error on field email')
  }

  emailService.send(data)

    .then(result => {

      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods':	'OPTIONS,GET,POST'
        },
        body: result ? JSON.stringify(result) : ''
      }

      callback(null, response)
    })

    .catch(err => {
      callback(err, null)
    })
    
}