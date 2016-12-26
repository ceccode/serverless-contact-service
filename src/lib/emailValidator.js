'use strict'

const emailValidator = require('email-validator')


class EmailValidator {

  isValid (email) {
    return emailValidator.validate(email)
  }

}

module.exports = EmailValidator