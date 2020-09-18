'use strict'

// show all thread on sign in
const onGetAllSuccess = function (data) {
  let display = '<div>'
  data.threads.forEach(thread => {
    const time = thread.createdAt.slice(0, 10)
    const line = (`
      <p class='thread-title'>${thread.title}</p>
      <p class='thread-owner'>Created by ${thread.owner.email}</p>
      <p class='date-created'>Created at ${time}</p>
      `)
    display += line
  })
  display += '</div>'
  console.log(display)
  $('.threads').html(display)
}
const onGetAllFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

const onCreateThreadSuccess = function (data) {
  console.log(data)
}
const onCreateThreadFailure = function () {
  $('#message').text('The server is down, please come back at another time')
}

module.exports = {
  onGetAllSuccess,
  onGetAllFailure,
  onCreateThreadSuccess,
  onCreateThreadFailure
}
