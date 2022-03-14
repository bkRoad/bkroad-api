'use strict'
const Api = require('claudia-api-builder')
const api = new Api()
const getUser = require('./handlers/get_user')
const updateUser = require('./handlers/update_user')

const getBook = require('./handlers/get_book')
const updateBook = require('./handlers/update_book')
const createBook = require('./handlers/create_book')

api.get('/user/{username}', request => getUser(request.pathParams.username)
, {
	error: 404
})

api.put('/user/{username}', request => updateUser(request.pathParams.username, request.body)
, {
	error: 400
})

api.get('book/', () => getBook())

api.get('book/{bookNumber}', request => getBook(request.pathParams.bookNumber)
, {
	error: 404
})

api.post('book/{bookNumber}', request => createBook(request.pathParams.bookNumber, request.body)
, {
	error: 400
})

api.put('book/{bookNumber}', request => updateBook(request.pathParams.bookNumber, request.body)
, {
	error: 400
})

module.exports = api