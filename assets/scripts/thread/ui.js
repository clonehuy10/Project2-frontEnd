'use strict'
const store = require('./../store')
const api = require('./api')

// show all thread on sign in
const onGetAllSuccess = function (data) {
  let display = ''
  data.threads.forEach(thread => {
    const time = thread.createdAt.slice(0, 10)
    const line = (`
      <a href="#" id="${thread._id}" class="thread-title">${thread.title}</a>
      <p class='thread-owner'>Created by ${thread.owner.email} at ${time}</p>
      <p class='thread-content'>${thread.content}</p>
      `)
    display = line + display
  })
  display = '<div>' + display + '</div>'
  $('.threads').html(display)
  $('#thread-cread').trigger('reset')
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
    <button type="button" class="edit-thread">Edit</button>
    <button type="button" class="delete-thread">Delete</button>
    `)

  let comments = ''

  // get all the comments
  thread.comments.forEach(comment => {
    const line = (`
      <p class='comment-owner'>${comment.owner.email}</p>
      <p class='comment-content'>${comment.content}</p>
      <button type="button" class="${comment._id}" id="edit-comment-button">Edit</button>
      <button type="button" class="${comment._id}" id="delete-comment-button">Delete</button>
      `)
    comments = comments + line
  })

  // put everything together before show it to the users
  topic = '<div>' + topic + comments + '</div>'
  $('.single-thread').html(topic)

  $('.threads').hide()
  $('.single-thread').show()
  $('#message').text('')
}
const onViewThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onCreateThreadSuccess = function (data) {
  const thread = data.thread
  const time = thread.createdAt.slice(0, 10)
  $('.threads').prepend(`
    <a href="#" id="${thread._id}" class="thread-title">${thread.title}</a>
    <p class='thread-owner'>Created by ${store.user.email} at ${time}</p>
    <p class='thread-content'>${thread.content}</p>
    `)
  $('#thread-create').trigger('reset')
}
const onCreateThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onCreateCommentSuccess = function (data) {
  const comment = data.thread.comments.pop()
  console.log('comment', comment)
  $('.single-thread').append(`
    <p class='comment-owner'>${store.user.email}</p>
    <p class='comment-content'>${comment.content}</p>
    <button type="button" class="${comment._id}" id="edit-comment-button">Edit</button>
    <button type="button" class="${comment._id}" id="delete-comment-button">Delete</button>
    `)
  $('#comment-create').trigger('reset')
}
const onCreateCommentFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onEditThreadSuccess = function (data) {
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#edit-thread').trigger('reset')
}
const onEditThreadFailure = function () {
  $('#message').text('Sorry but you are not the owner of this post')
}

const onEditCommentSuccess = function (data) {
  api.viewThread()
    .then(onViewTheardSuccess)
    .catch(onViewThreadFailure)
  $('#edit-comment').trigger('reset')
  store.commentId = null
}
const onEditCommentFailure = function () {
  $('#message').text('Sorry but you are not the owner of this comment')
}

const onDeleteThreadSuccess = function () {
  store.threadId = null
}
const onDeleteThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onDeleteCommentSuccess = function () {
  store.commentId = null
}
const onDeleteCommentFailure = function () {
  $('#message').text('The server is down, please come back at another time')
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
  onDeleteCommentFailure
}
