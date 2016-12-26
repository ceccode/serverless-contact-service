'use strict'

class EmailService {

  constructor(ses) {
    this.ses = ses
  }

  send(data) {

    let params = {
      Destination: {
        ToAddresses: [
          process.env.EMAIL_RECEIVER
        ]
      },
      Message: {
        Body: {
          Text: {
            Data: 'Name: ' + data.name + '\nEmail: ' + data.email + '\nDesc: ' + data.message,
            Charset: 'UTF-8'
          }
        },
        Subject: {
          Data: process.env.EMAIL_OBJECT + ': ' + data.name,
          Charset: 'UTF-8'
        }
      },
      Source: process.env.EMAIL_SENDER
    }

    return this.ses.sendEmail(params).promise()

  }

}

module.exports = EmailService
