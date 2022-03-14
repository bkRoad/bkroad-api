'use strict'
const Api = require('claudia-api-builder')
const api = new Api()
const getTable = require('./handlers/get_table')
const createStudent = require('./handlers/create_student')
const updateTable = require('./handlers/update_table')
const deleteStudent = require('./handlers/delete_student')

api.get('/', () => {
    return "Welcome to CSM!"
})

api.get('/attendance', () => {
	return getTable('attendance')
})

api.put('/attendance/{id}', request => {
	return updateTable(request.pathParams.id, request.body, "attendance")
}, {
	error: 400
})

api.get('/effort', () => {
	return getTable('effort')
})

api.put('/effort/{id}', request => {
	return updateTable(request.pathParams.id, request.body, "effort")
}, {
	error: 400
})

api.get('/progress', () => {
	return getTable('progress')
})
api.put('/progress/{id}', request => {
	return updateTable(request.pathParams.id, request.body, "progress")
}, {
	error: 400
})

api.post('/student', (request) => {
	return createStudent(request.body)
} , {
	success: 201,
	error: 400
})

api.delete('/student', (request) => {
	return deleteStudent(request.body)
},{
	success: 201,
	error: 400
})



module.exports = api