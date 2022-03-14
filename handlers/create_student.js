const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid').v4

function createStudent(student)
{
	if(!student || !student.name)
		throw new Error(`Student doesn't have a name?!?`)
	const table_name = ['attendance', 'effort', 'progress']
	let student_id = uuid()
	for(const name of table_name)
	{		
		docClient.put({
			TableName: name,
			Item: {
				StudentID: student_id,
				StudentName: student.name
			}
		}).promise().then(res => 
		{
			console.log('Insert into table!', res)
		}).catch(saveError => {
			console.log(`Oopsy whoopsy we are vewooy sorry :(`, saveError)
			throw saveError
		})
	}
	return "Insert successful!"
}

module.exports = createStudent