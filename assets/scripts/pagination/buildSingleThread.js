'use strict'
const store = require('./../store')
const makeButtons = require('./makeButtons')

// build the table
const buildSingleThread = function (data) {
  const storeData = store.currentState

  // calculate number of page need
  const currentPage = makeButtons.pageCount(data.comments, storeData.page, storeData.limit)

  // ---------- create table of contents ----------

  // get the topic
  let topic = (`
    <h3 class='thread-title text-white'>${data.title}</h3>
    <li class="list-group-item box">
      <p class='thread-owner'>${data.owner.email}</p>
      <p class='thread-content'>${data.content}</p><br>
      <div class="btn-group float-right">
        <button type="button" class="btn btn-outline-primary edit-thread-button" data-toggle="modal" data-target="#edit-a-thread">Edit</button>
        <button type="button" class="btn btn-outline-danger delete-thread">Delete</button>
      </div>
    </li>
    `)

  let comments = ''

  // get all the comments
  currentPage.forEach(comment => {
    const line = (`
      <li class="list-group-item box">
        <p class='comment-owner'>${comment.owner.email}</p>
        <p class='comment-content'>${comment.content}</p>
        <div class="btn-group float-right">
          <button type="button" class="btn btn-outline-primary edit-comment-button" value="${comment._id}" data-toggle="modal" data-target="#edit-a-comment">Edit</button>
          <button type="button" class="btn btn-outline-danger delete-comment-button" value="${comment._id}">Delete</button>
        </div>
      </li>
      `)
    comments = comments + line
  })

  // put everything together before show it to the users
  topic = '<ul class="list-group">' + topic + comments + '</ul>'

  // show table to users
  $('.single-thread').html(topic)

  // make buttons
  makeButtons.makeButtons(storeData.numberOfPage)
}

module.exports = {
  buildSingleThread
}
