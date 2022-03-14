const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function updateTable(id, updates, table)
{
	if(!id || !updates)
		throw new Error("What update???")
	return docClient.update({
		TableName: table,
		Key: {
			StudentID: id
		},
		UpdateExpression: 'set data_array = :d',
		ExpressionAttributeValues: {
			':d': updates.data
		},
		ReturnValue: 'ALL_NEW'
	}).promise().then(result => {
		console.log('Database is updated!', result)
		return result.Attributes
	}).catch(updateError => {
		console.log(`Ooopsy, can't updateeeeee :(`, updateError)
		throw updateError
	})
}

module.exports = updateTable