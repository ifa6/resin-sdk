###*
# @module resin.server
# @private
###

_ = require('lodash')
async = require('async')
settings = require('./settings')
serverUtils = require('./server-utils')
errors = require('./errors')

###*
# @ignore
###
urlResolve = require('url').resolve

###*
# request callback
# @callback module:resin.server~requestCallback
# @param {(Error|null)} error - error
# @param {Object} response - response
# @param {Object} body - body
###

###*
# @summary Send an HTTP request to resin.io
# @private
# @function
#
# @description If the user is logged in, the token gets automatically added to Authorization header
# If the response is JSON, it will attempt to parse it
#
# @param {Object} options -  request options
# @param {String} options.url - relative url
# @param {String} options.json - request body
# @param {String} options.method - http method
# @param {Object} options.headers - custom http headers
# @param {Function} options.pipe - define this function if you want to stream the response
#
# @param {module:resin.server~requestCallback} callback - callback
# @param {Function} [onProgress] - on progress callback
#
# @throws {Error} Will throw if no URL
#
# @example
#	resin.server.request {
#		method: 'GET'
#		url: '/foobar'
#	}, (error, response, body) ->
#		throw error if error?
#		console.log(body)
#
#	@example
#	resin.server.request {
#		method: 'POST'
#		url: '/foobar'
#		json:
#			name: 'My FooBar'
#	}, (error, response, body) ->
#		throw error if error?
#		assert(response.statusCode is 201)
#
#	@example
#	resin.server.request {
#		method: 'GET'
#		url: '/download'
#		pipe: fs.createWriteStream('/tmp/download')
#	}, (error) ->
#		throw error if error?
#	, (state) ->
#		console.log("Received: #{state.received}")
#		console.log("Total: #{state.total}")
#		console.log("Percentage: #{state.percentage}%")
#		console.log("Delta: #{state.delta}")
#		console.log("Eta: #{state.eta}s")
#
###
exports.request = (options = {}, callback, onProgress = _.noop) ->

	if not options.url?
		throw new errors.ResinMissingOption('url')

	options.url = urlResolve(settings.get('remoteUrl'), options.url)
	options.method = options.method.toUpperCase() if options.method?

	_.defaults options,
		method: 'GET'
		gzip: true

	async.waterfall([

		(callback) ->
			serverUtils.checkIfOnline(callback)

		(callback) ->
			serverUtils.authenticate(options, callback)

		(callback) ->
			if options.pipe?
				serverUtils.pipeRequest(options, callback, onProgress)
			else
				serverUtils.sendRequest(options, callback)

	], callback)

# @summary Generate shorthand functions for every method
#
# @private
#
# @todo Find a way to document all of the methods directly
#
createFacadeFunction = (method) ->
	lowerCaseMethod = method.toLowerCase()
	exports[lowerCaseMethod] = (url, body, callback, onProgress) ->
		options = {
			method
			url
		}

		if _.isFunction(body)
			onProgress = callback
			callback = body
		else
			options.json = body

		return exports.request(options, callback, onProgress)

for method in [
	'GET'
	'HEAD'
	'POST'
	'PATCH'
	'PUT'
	'DELETE'
]
	createFacadeFunction(method)
