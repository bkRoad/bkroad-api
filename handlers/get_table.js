const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getTable(table){
	return docClient.scan({
		TableName: table
	}).promise().then(result => result.Items)
}
module.exports = getTable
