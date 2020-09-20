'use strict'
const store = require('./../store')
const api = require('./api')
const pagination = require('./../pagination/pagination')

// show all thread on sign in
const onGetAllSuccess = function (data) {
  pagination.buildPagination(data.threads)
  let display = ''
  data.threads.forEach(thread => {
    const time = thread.createdAt.slice(0, 10)
    const line = (`
      <li class="list-group-item">
        <a href="#" id="${thread._id}" class="thread-title">${thread.title}</a>
        <p class='thread-owner'>Created by ${thread.owner.email} at ${time}</p>
        <p class='thread-content'>${thread.content}</p>
      </li>
      `)
    display = line + display
  })
  display = '<ul class="list-group">' + display + '</ul>'
  $('.threads').html(display)
}
const onGetAllFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onViewTheardSuccess = function (data) {
  const thread = data.thread
  // get the topic
  let topic = (`
    <p class='thread-title'>${thread.title}</p>
    <p class='thread-content'>${thread.content}</p>
    <button type="button" class="edit-thread-button" data-toggle="modal" data-target="#edit-a-thread">Edit</button>
    <button type="button" class="delete-thread">Delete</button>
    `)

  let comments = ''

  // get all the comments
  thread.comments.forEach(comment => {
    const line = (`
      <p class='comment-owner'>${comment.owner.email}</p>
      <p class='comment-content'>${comment.content}</p>
      <button type="button" class="${comment._id}" id="edit-comment-button" data-toggle="modal" data-target="#edit-a-comment">Edit</button>
      <button type="button" class="${comment._id}" id="delete-comment-button">Delete</button>
      `)
    comments = comments + line
  })

  // put everything together before show it to the users
  topic = '<div>' + topic + comments + '</div>'
  $('.single-thread').html(topic)
  $('#message').text('')

  $('.threads').hide()
  $('.new-thread').hide()
  $('.single-thread').show()
  $('.new-comment').show()
  $('#go-back').show()
}
const onViewThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
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
  const comment = data.thread.comments.pop()
  console.log('comment', comment)
  $('.single-thread').append(`
    <p class='comment-owner'>${store.user.email}</p>
    <p class='comment-content'>${comment.content}</p>
    <button type="button" class="${comment._id}" id="edit-comment-button" data-toggle="modal" data-target="#edit-a-comment">Edit</button>
    <button type="button" class="${comment._id}" id="delete-comment-button">Delete</button>
    `)
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
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#edit-comment').trigger('reset')
  store.commentId = null

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
  $('#message').text('You have successfully deleted your topic')

  $('.threads').show()
  $('.new-thread').show()
  $('.single-thread').hide()
  $('.new-comment').hide()
  $('#go-back').hide()
}
const onDeleteThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onDeleteCommentSuccess = function () {
  store.commentId = null
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#message').text('You have successfully deleted your comment')
}
const onDeleteCommentFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onBackSuccess = function () {
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
