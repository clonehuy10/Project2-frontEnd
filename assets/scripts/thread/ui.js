'use strict'
const store = require('./../store')

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

const onCreateThreadSuccess = function (data) {
  const thread = data.thread
  const time = thread.createdAt.slice(0, 10)
  $('.threads').prepend(`
    <a href="#" id="${thread._id}" class="thread-title">${thread.title}</a>
    <p class='thread-owner'>Created by ${store.user.email} at ${time}</p>
    <p class='thread-content'>${thread.content}</p>
    `)
}
const onCreateThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onViewTheardSuccess = function (data) {
  const thread = data.thread
  // get the topic
  let topic = (`
    <p class='thread-title'>${thread.title}</p>
    <p class='thread-content'>${thread.content}</p>
    `)

  let comments = ''

  // get all the comments
  thread.comments.forEach(comment => {
    const line = (`
      <p class='comment-owner'>${comment.owner.email}</p>
      <p class='comment-content'>${comment.content}</p>
      `)
    comments = comments + line
  })

  // put everything together before show it to the users
  topic = '<div>' + topic + comments + '</div>'
  $('.single-thread').html(topic)
}
const onViewThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onCreateCommentSuccess = function (data) {
  console.log(data.thread.comments)
  const comment = data.thread.comments.pop()
  console.log('comment', comment)
  $('.single-thread').append(`
    <p class='comment-owner'>${store.user.email}</p>
    <p class='comment-content'>${comment.content}</p>
    `)
}
const onCreateCommentFailure = function () {
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
  onCreateCommentFailure
}
