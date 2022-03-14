'use strict'
const Api = require('claudia-api-builder')
const api = new Api()
const getUser = require('./handlers/get_user')
const updateUser = require('./handlers/update_user')

const getBook = require('./handlers/get_book')
const updateBook = require('./handlers/update_book')
const createBook = require('./handlers/create_book')

api.get('/user/{username}', (request) => {
	return getUser(request.pathParams.username)
} , {
	error: 404
})

api.put('/user/{username}', (request) => {
	return updateUser(request.pathParams.username, request.body)
} , {
	error: 400
})

api.get('books/', () => {
	return getBook()
})

api.get('book/{bookNumber}', (request) => {
	return getBook(request.pathParams.bookNumber)
} , {
	error: 404
})

api.post('book/{bookNumber}', (request) => {
	return createBook(request.pathParams.bookNumber, request.body)
} , {
	error: 400
})

api.put('book/{bookNumber}', (request) => {
	return updateBook(request.pathParams.bookNumber, request.body)
} , {
	error: 400
})

module.exports = api