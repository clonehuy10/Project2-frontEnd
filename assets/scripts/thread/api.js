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
const viewThread = function () {
  return $.ajax({
    url: config.apiUrl + '/threads/' + store.threadId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const createComment = function (data, threadId) {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      comment: {
        content: data.content,
        owner: store.user._id,
        threadId: store.threadId
      }
    }
  })
}

module.exports = {
  getAll,
  createThread,
  viewThread,
  createComment
}
