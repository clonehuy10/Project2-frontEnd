'use strict'
const store = require('./../store')
const threadEvents = require('./../thread/events')

// Sign up new account
const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
}

// Sign in
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  threadEvents.getAllThreads()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed, please try again')
}

// Change password
const onChangeSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
}
const onChangeFailure = function () {
  $('#message').text('Change password failed, please try again')
}

// Sign out
const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('See you next time!!!!')
}
const onSignOutFailure = function () {
  $('#message').text('Failed to sign out!!!!')
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
