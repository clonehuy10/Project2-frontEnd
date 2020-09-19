'use strict'
const config = require('./../config')
const store = require('./../store')

const getAll = function () {
  return $.ajax({
    url: config.apiUrl + '/threads',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
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
const createComment = function (data) {
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

const editThread = function (data) {
  return $.ajax({
    url: config.apiUrl + '/threads/' + store.threadId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      thread: {
        title: data.title,
        content: data.content
      }
    }
  })
}
const editComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + store.commentId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      comment: {
        content: data.content,
        threadId: store.threadId
      }
    }
  })
}

const deleteThread = function () {
  return $.ajax({
    url: config.apiUrl + '/threads/' + store.threadId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const deleteComment = function () {
  return $.ajax({
    url: config.apiUrl + '/comments/' + store.commentId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      threadId: store.threadId
    }
  })
}

module.exports = {
  getAll,
  createThread,
  viewThread,
  createComment,
  editThread,
  editComment,
  deleteThread,
  deleteComment
}
