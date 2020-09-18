'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events')
const threadEvents = require('./thread/events')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#thread-create').on('submit', threadEvents.onCreateThread)
  $('.threads').on('click', '.thread-title', threadEvents.onViewThread)
  $('#comment-create').on('submit', threadEvents.onCreateComment)
})
