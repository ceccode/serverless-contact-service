# Serverless contact service

[![Build Status](https://travis-ci.org/ceccode/serverless-contact-service.svg?branch=master)](https://travis-ci.org/ceccode/serverless-contact-service)
[![Known Vulnerabilities](https://snyk.io/test/github/ceccode/serverless-contact-service/badge.svg)](https://snyk.io/test/github/ceccode/serverless-contact-service)
[![https://david-dm.org/ceccode/serverless-contact-service.svg](https://david-dm.org/ceccode/serverless-contact-service.svg)](https://david-dm.org/ceccode/serverless-contact-service.svg)

API Gateway + AWS Lambda + AWS SES 

The email function use the AWS SDK for Node.js to send an email using [AWS Simple Email Service](https://aws.amazon.com/ses/).

Usefull for:

* Marketing websites
* Product landing pages
* Micro-sites
* Team homepages


## Install

Clone the project: `git clone git@github.com:ceccode/serverless-contact-service.git`

```
npm install
```

## Configuration


1. In your serverless.yml file set environment var:

```
  environment:
    EMAIL_SENDER: 'you-sender-address'
    EMAIL_RECEIVER: 'you-receiver-address'
    EMAIL_OBJECT: 'Referral Form'

```

This project use Amazon SES to send emails. For testing, it restricts the email addresses that can “send” and “receive” messages to ones that have been “verified”. 
Go to the SES page of the Console, choose Email Addresses > Verify New Email Address.


2. Ad an usage plan to your api-key, see how [here](https://aws.amazon.com/blogs/aws/new-usage-plans-for-amazon-api-gateway/)

Find the api-key name in your serverless.yml file:

```
  apiKeys:
    - contack-key   
```

## Deploy

```
npm run deploy
```

## Use

```
[POST] /contact
```

Headers

```
{
	"Content-Type": "application/json",
    "x-api-key": "spnbH7eO7Rgj1Kv6tJ7v9jKwvY6sPyL27eV8nYqb",
}
```

Body:

```
{
	"name": "Mario Rossi",
    "email": "mario.rossi@example.it",
	"message": "My message"
}
```

## Test

Run all tests

```
npm test
```

**Coverage**

```
npm run test-travis
```

## License

[MIT license](LICENSE)