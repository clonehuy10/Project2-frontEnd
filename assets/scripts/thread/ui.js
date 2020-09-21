'use strict'
const store = require('./../store')
const api = require('./api')
const buildPage = require('./../pagination/buildPage')
const buildSingleThread = require('./../pagination/buildSingleThread')

// show all thread on sign in
const onGetAllSuccess = function (data) {
  store.currentState = {
    database: data.threads.reverse(),
    page: 1,
    limit: 5,
    minPage: 1,
    numberOfPage: 0,
    pageLimit: 5
  }

  buildPage.buildPage(store.currentState.database)
  $('.pagination').show()
}
const onGetAllFailure = function () {

  $('#message').text('The server is down, please come back at another time').fadeIn(3000).fadeOut(3000)
}

const onViewTheardSuccess = function (data) {
  store.currentState.database = data.thread

  buildSingleThread.buildSingleThread(store.currentState.database)
  $('#message').text('')

  $('.threads').hide()
  $('.new-thread').hide()
  $('.single-thread').show()
  $('.new-comment').show()
  $('#go-back').show()
}
const onViewThreadFailure = function () {

  $('#message').text('The server is down, please come back at another time').fadeIn(3000).fadeOut(3000)
}

const onCreateThreadSuccess = function (data) {
  api.getAll()
    .then(onGetAllSuccess)
    .catch(onGetAllFailure)
  $('#thread-create').trigger('reset')

  $('#message-in-modal').text('You have successfully created a new post!!!!!!')
}
const onCreateThreadFailure = function () {
  $('#message-in-modal').text('The server is down, please come back at another time')
}

const onCreateCommentSuccess = function (data) {
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#comment-create').trigger('reset')

  $('#message-in-modal').text('You have successfully posted a new comment!!!!!!')
}
const onCreateCommentFailure = function () {
  $('#message-in-modal').text('The server is down, please come back at another time')
}

const onEditThreadSuccess = function (data) {
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#edit-thread').trigger('reset')

  $('#message-in-modal').text('You have successfully editted your post')
}
const onEditThreadFailure = function () {
  $('#message-in-modal').text('Sorry but you are not the owner of this post')
}

const onEditCommentSuccess = function (data) {
  store.commentId = null
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#edit-comment').trigger('reset')

  $('#message-in-modal').text('You have successfully editted your comment')
}
const onEditCommentFailure = function () {
  $('#message-in-modal').text('Sorry but you are not the owner of this comment')
}

const onDeleteThreadSuccess = function () {
  store.threadId = null
  api.getAll()
    .then(onGetAllSuccess)
    .catch(onGetAllFailure)

  $('#message').text('You have successfully deleted your topic').fadeIn(3000).fadeOut(3000)

  $('.threads').show()
  $('.new-thread').show()
  $('.single-thread').hide()
  $('.new-comment').hide()
  $('#go-back').hide()
}
const onDeleteThreadFailure = function () {

  $('#message').text('The server is down, please come back at another time').fadeIn(3000).fadeOut(3000)
}

const onDeleteCommentSuccess = function () {
  store.commentId = null
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)

  $('#message').text('You have successfully deleted your comment').fadeIn(3000).fadeOut(3000)
}
const onDeleteCommentFailure = function () {

  $('#message').text('The server is down, please come back at another time').fadeIn(3000).fadeOut(3000)
}

const onBackSuccess = function () {
  store.threadId = null

  api.getAll()
    .then(onGetAllSuccess)
    .catch(onGetAllFailure)

  $('.threads').show()
  $('.new-thread').show()
  $('.single-thread').hide()
  $('.new-comment').hide()
  $('#go-back').hide()
}

module.exports = {
  onGetAllSuccess,
  onGetAllFailure,
  onCreateThreadSuccess,
  onCreateThreadFailure,
  onViewTheardSuccess,
  onViewThreadFailure,
  onCreateCommentSuccess,
  onCreateCommentFailure,
  onEditThreadSuccess,
  onEditThreadFailure,
  onEditCommentSuccess,
  onEditCommentFailure,
  onDeleteThreadSuccess,
  onDeleteThreadFailure,
  onDeleteCommentSuccess,
  onDeleteCommentFailure,
  onBackSuccess
}
