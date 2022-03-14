const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = (username, updates) => {
	if(!username || !updates)
		throw new Error("Update what bruh")
	return docClient.put({
        TableName: 'bkroad-users',
        Key: {
            userName: username
        },
        UpdateExpression: 'set password = :p, address = :a, email = :e',
        ExpressionAttributeValues: {
            ':p': updates.password,
            ':a': updates.address,
			':e': updates.email
        },
        ReturnValues: 'ALL_NEW'
    }).promise().then((result) => {
        console.log('User is updated!', result)
        return result.Attributes
    }).catch((deleteError) => {
        console.log('Ooopsy, cant updateee :(', deleteError)
        throw deleteError
    })
}