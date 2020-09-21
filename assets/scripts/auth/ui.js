'use strict'
const store = require('./../store')
const threadEvents = require('./../thread/events')

// Sign up new account
const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email).fadeIn(3000).fadeOut(3000)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again').fadeIn(3000).fadeOut(3000)
  $('#sign-up-form').trigger('reset')
}

// Sign in
const onSignInSuccess = function (response) {
  store.user = response.user

  $('#message').text('Thanks for signing in ' + response.user.email).fadeIn(3000).fadeOut(3000)
  $('#sign-in-form').trigger('reset')
  threadEvents.getAllThreads()

  $('.sign-up-box').hide()
  $('.sign-in-box').hide()
  $('.setting').show()
  $('.threads').show()
  $('.new-thread').show()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed, please try again').fadeIn(3000).fadeOut(3000)
  $('#sign-in-form').trigger('reset')
}

// Change password
const onChangeSuccess = function () {
  $('#message-in-modal').text('Changed password successfully')
  $('#change-password').trigger('reset')
}
const onChangeFailure = function () {
  $('#message-in-modal').text('Change password failed, please try again')
  $('#change-password').trigger('reset')
}

// Sign out
const onSignOutSuccess = function () {
  store.user = null
  store.commentId = null
  store.threadId = null
  store.currentState = null

  $('#message').text('See you next time!!!!').fadeIn(3000).fadeOut(3000)

  $('.sign-up-box').show()
  $('.sign-in-box').show()
  $('.setting').hide()
  $('.threads').hide()
  $('.new-thread').hide()
  $('.pagination').hide()
}
const onSignOutFailure = function () {
  $('#message').text('Failed to sign out!!!!').fadeIn(3000).fadeOut(3000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
