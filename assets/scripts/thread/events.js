'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')
const api = require('./api')
const ui = require('./ui')

const getAllThreads = function () {
  api.getAll()
    .then(ui.onGetAllSuccess)
    .catch(ui.onGetAllFailure)
}
const onCreateThread = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createThread(data)
    .then(ui.onCreateThreadSuccess)
    .catch(ui.onCreateThreadFailure)
}
const onViewThread = function (event) {
  event.preventDefault()
  store.threadId = event.target.id

  api.viewThread()
    .then(ui.onViewTheardSuccess)
    .catch(ui.onViewThreadFailure)
}
const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.createComment(data)
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onCreateCommentFailure)
}

module.exports = {
  getAllThreads,
  onCreateThread,
  onViewThread,
  onCreateComment
}
