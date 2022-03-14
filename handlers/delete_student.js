const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
function deleteStudent(body){
	if(!body || !body.id)
		throw new Error("Can't update without id...")
	
	const table_name = ['attendance', 'effort', 'progress']
	for(const name of table_name)
	{		
		docClient.delete({
			TableName: name,
			Key: {
				StudentID: body.id
			}
		}).promise().then(res => 
		{
			console.log('Delete from table!', res)
		}).catch(saveError => {
			console.log(`Oopsy whoopsy we are vewooy sorry :(`, saveError)
			throw saveError
		})
	}
	return "Delete successful!"
}

module.exports = deleteStudent