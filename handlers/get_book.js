const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = (bookNumber) => {
	if(!bookNumber)
		return docClient.scan({
			TableName: 'bkroad-books'
		}).promise().then(result => result.Items)
	return docClient.get({
		TableName: 'bkroad-books',
		Key: {
			bookNumber: bookNumber
	}}).promise().then(result => result.Items)
}