const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = (username) => docClient.get({
	TableName: 'bkroad-users',
	Key: {
		userName: username
	}
}).promise().then(result => result.Items).catch(error => error)