'use strict'

const chai = require('chai')

const expect = chai.expect
const assert = chai.assert
chai.should()

const EmailService = require('./../src/lib/emailService')
const aws = require('aws-sdk')
const ses = new aws.SES()

const data = { 
  name: 'Mario Rossi',
  email: 'mario.rossi@example.com',
  message: 'Contact message'
}

const sesResponse = {
  'ResponseMetadata': {
    'RequestId': '6dc2c31f-cb88-11e6-887f-af95c261db03'
  },
  'MessageId': '010201593bf6d783-78c3ce70-6313-426f-99af-f125c46a1c3c-000000'
}

//mock ses.sendEmail
ses.sendEmail = () => {
  return {
    promise() {
      return Promise.resolve(sesResponse)
    }
  }
}

describe('EmailService', () => {

  let emailService
  emailService = new EmailService(ses)

  it('is an instance of EmailService', () => {
    expect(emailService).to.be.an.instanceof(EmailService)    

  })

  it('should have send method', () => {
    assert.equal('function', typeof emailService.send)
  })

  it('should have a ses property', () => {
    assert.ok(emailService.ses)
  })

  describe('send', () => {

    it('should succeed when promise is resolved', () => {
      const result = emailService.send(data)

      return result.then((value) => {
        expect(value).to.deep.equal(sesResponse)
      })
    })

  })

})