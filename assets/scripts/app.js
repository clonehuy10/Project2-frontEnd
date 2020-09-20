'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events')
const threadEvents = require('./thread/events')

// hide on load
$('.setting').hide()
$('.threads').hide()
$('.single-thread').hide()
$('.new-thread').hide()
$('.new-comment').hide()
$('#go-back').hide()

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)

  $('.threads').on('click', '.thread-title', threadEvents.onViewThread)
  $('#thread-create').on('submit', threadEvents.onCreateThread)
  $('#comment-create').on('submit', threadEvents.onCreateComment)

  $('.single-thread').on('click', '.edit-thread', threadEvents.onEditThreadButton)
  $('#edit-thread').on('submit', threadEvents.onEditThread)
  $('.single-thread').on('click', '.edit-comment-button', threadEvents.onEditCommentButton)
  $('#edit-comment').on('submit', threadEvents.onEditComment)

  $('.single-thread').on('click', '.delete-thread', threadEvents.onDeleteThread)
  $('.single-thread').on('click', '.delete-comment-button', threadEvents.onDeleteComment)
  $('#go-back').on('click', threadEvents.onBack)
})
