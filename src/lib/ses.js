'use strict'

const aws = require('aws-sdk')

const isOffline = () => process.env.IS_OFFLINE

const options = {
  region: 'eu-west-1'
}

const ses = isOffline()
  ? new aws.SES(options)
  : new aws.SES()

module.exports = ses