###*
# @module resin.data.prefix
###

_ = require('lodash')
mkdirp = require('mkdirp')
errors = require('./errors')

###*
# @ignore
###
prefix = null

###*
# @summary Get current prefix
# @public
# @function
#
# @returns {String} prefix
#
# @example
#	prefix = resin.data.prefix.get()
###
exports.get = ->
	return prefix

###*
# set callback
# @callback module:resin.data.prefix~setCallback
# @param {(Error|null)} error - error
###

###*
# @summary Set prefix
# @public
# @function
#
# @param {String} newPrefix - new prefix
# @param {module:resin.data.prefix~setCallback} callback - callback
#
# @example
#	resin.data.prefix.set '/opt/resin', (error) ->
#		throw error if error?
###
exports.set = (newPrefix, callback) ->
	if not _.isString(newPrefix)
		return callback?(new errors.ResinInvalidPath(newPrefix))

	mkdirp newPrefix, (error) ->
		return callback?(error) if error?
		prefix = newPrefix
		return callback?()

###*
# @summary Clear prefix
# @public
# @function
#
# @example
#	resin.data.prefix.clear()
###
exports.clear = ->
	prefix = null
