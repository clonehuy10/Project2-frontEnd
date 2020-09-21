'use strict'
const store = require('./../store')
const makeButtons = require('./makeButtons')

// build the table
const buildPage = function (data) {
  const storeData = store.currentState

  // calculate number of page need
  const currentPage = makeButtons.pageCount(data, storeData.page, storeData.limit)

  // main content
  let display = ''

  // ---------- create table of contents ----------
  currentPage.forEach(thread => {
    const time = thread.createdAt.slice(0, 10)
    const line = (`
      <li class="list-group-item box">
        <a href="#" id="${thread._id}" class="thread-title">${thread.title}</a>
        <p class='thread-owner'><small>Created by ${thread.owner.email} at ${time}</small></p>
      </li>
      `)
    display = display + line
  })

  // show table to users
  display = '<ul class="list-group">' + display + '</ul>'
  $('.threads').html(display)

  // make buttons
  makeButtons.makeButtons(storeData.numberOfPage)
}

module.exports = {
  buildPage
}
