const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = (bookNumber, body) => {
	if(!bookNumber || !body)
		throw new Error("Update what bruh")
	return docClient.put({
        TableName: 'bkroad-books',
        Item: {
            author: body.author,
            title: body.title,
			description: body.description,
			returnDate: body.returnDate,
			imageURL: body.imageURL,
			inShelf: body.inShelf
        },
        ReturnValues: 'ALL_NEW'
    }).promise().then((result) => {
        console.log('Order is updated!', result)
        return result.Attributes
    }).catch((saveError) => {
        console.log('Ooopsy, cant updateee :(', saveError)
        throw saveError
    })
}