'use strict'
// store database get back from the api
let database

const state = {
  page: 1,
  limit: 5,
  minPage: 1,

  numberOfPage: 0,

  pageLimit: 5
}

// calculate the number of page need for database and a set of content on current page
const pageCount = function (data, page, limit) {
  // start point and end point of content on current page
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  // set of content on current page
  const result = data.slice(startIndex, endIndex)

  // number of page need for database
  state.numberOfPage = Math.ceil(data.length / limit)

  return {
    result
  }
}

// function to make buttons with number of page and show it to users
const makeButtons = function (pages) {
  // empty the pagination
  $('.pagination').empty()

  // calculate min and max to only show few buttons of page at a time
  let maxPage = state.minPage + 4

  if (state.page < 5 && state.numberOfPage < 5) {
    state.minPage = 1
    maxPage = state.numberOfPage
  } else if (state.page < 4) {
    state.minPage = 1
    maxPage = 5
  } else if (state.page >= pages - 2) {
    maxPage = pages
    state.minPage = maxPage - 4
  } else {
    state.minPage = state.page - Math.floor(state.pageLimit / 2)
    maxPage = state.page + Math.floor(state.pageLimit / 2)
  }

  // create button
  let buttons = ''
  for (let i = state.minPage; i <= maxPage; i++) {
    const line = (`
    <button value=${i} class="pageButton" type="button">${i}</button>
    `)
    buttons = buttons + line
  }
  // create previous and next buttons
  let previous = ''
  let next = ''
  if (state.page > 1) {
    previous = (`<button value=${state.page - 1} class="pageButton" type="button">&lt;</button>`)
  }
  if (state.page < pages) {
    next = (`<button value=${state.page + 1} class="pageButton" type="button">&gt;</button>`)
  }
  // create first and last buttons
  const first = ('<button value=1 class="pageButton" type="button">&lt;&lt;</button>')
  const last = (`<button value=${pages} class="pageButton" type="button">&gt;&gt;</button>`)
  buttons = first + previous + buttons + next + last

  // show them on browser
  $('.pagination').html(buttons)

  // action with buttons
  $('.pageButton').on('click', function () {
    state.page = parseInt(event.target.value)

    working(database)
  })
}

// build the table
const working = function (data) {
  // calculate number of page need
  const currentPage = pageCount(database, state.page, state.limit)

  // main content
  let display = ''

  // create table of contents
  currentPage.result.forEach(thread => {
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
  makeButtons(state.numberOfPage)
}

// function to export the whole thing
const buildPage = function (data) {
  // store data and reverse it so newest post get on top
  database = data.reverse()

  working(database)
}

module.exports = {
  buildPage
}
