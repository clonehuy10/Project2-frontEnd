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
  const data = getFormFields(event.target)

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

const onEditThreadButton = function (event) {
  event.preventDefault()
}
const onEditThread = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.editThread(data)
    .then(ui.onEditThreadSuccess)
    .catch(ui.onEditThreadFailure)
}
const onEditCommentButton = function (event) {
  event.preventDefault()
  store.commentId = event.target.classList.value
}
const onEditComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.editComment(data)
    .then(ui.onEditCommentSuccess)
    .catch(ui.onEditCommentFailure)
}

const onDeleteThread = function (event) {
  event.preventDefault()

  api.deleteThread()
    .then(ui.onDeleteThreadSuccess)
    .catch(ui.onDeleteThreadFailure)
}
const onDeleteComment = function (event) {
  event.preventDefault()
  store.commentId = event.target.classList.value

  api.deleteComment()
    .then(ui.onDeleteCommentSuccess)
    .catch(ui.onDeleteCommentFailure)
}

module.exports = {
  getAllThreads,
  onCreateThread,
  onViewThread,
  onCreateComment,
  onEditThreadButton,
  onEditThread,
  onEditCommentButton,
  onEditComment,
  onDeleteThread,
  onDeleteComment
}
