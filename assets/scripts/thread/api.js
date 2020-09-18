'use strict'
const config = require('./../config')
const store = require('./../store')

const getAll = function () {
  return $.ajax({
    url: config.apiUrl + '/show-all-thread',
    method: 'GET'
  })
}
const createThread = function (data) {
  return $.ajax({
    url: config.apiUrl + '/threads',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      thread: {
        title: data.title,
        content: data.content,
        owner: store.user._id
      }
    }
  })
}

module.exports = {
  getAll,
  createThread
}
