const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = (bookNumber, updates) => {
	if(!bookNumber || !updates || !updates.inShelf)
		throw new Error("Update what bruh")
	return docClient.update({
        TableName: 'bkroad-books',
        Key: {
            bookNumber: bookNumber
        },
        UpdateExpression: 'set inShelf = :i',
        ExpressionAttributeValues: {
            ':i': updates.inShelf
        },
        ReturnValues: 'ALL_NEW'
    }).promise().then((result) => {
        console.log('Book is updated!', result)
        return result.Attributes
    }).catch((deleteError) => {
        console.log('Ooopsy, cant updateee :(', deleteError)
        throw deleteError
    })
}