'use strict'
const store = require('./../store')

// calculate the number of page need for database and a set of content on current page
const pageCount = function (data, page, limit) {
  // start point and end point of content on current page
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  // set of content on current page
  const result = data.slice(startIndex, endIndex)

  // number of page need for database
  store.currentState.numberOfPage = Math.ceil(data.length / limit)

  return result
}

// function to make buttons with number of page and show it to users
const makeButtons = function (pages) {
  const storeData = store.currentState
  // empty the pagination
  $('.pagination').empty()

  // calculate min and max to only show few buttons of page at a time
  let maxPage = storeData.minPage + 4

  if (storeData.page < 5 && storeData.numberOfPage < 5) {
    storeData.minPage = 1
    maxPage = storeData.numberOfPage
  } else if (storeData.page < 4) {
    storeData.minPage = 1
    maxPage = 5
  } else if (storeData.page >= pages - 2) {
    maxPage = pages
    storeData.minPage = maxPage - 4
  } else {
    storeData.minPage = storeData.page - Math.floor(storeData.pageLimit / 2)
    maxPage = storeData.page + Math.floor(storeData.pageLimit / 2)
  }

  // create button
  let buttons = ''
  for (let i = storeData.minPage; i <= maxPage; i++) {
    if (i === storeData.page) {
      const line = (`
        <li class="page-item active"><a class="page-link links" id="${i}" href="#">${i}</a></li>
        `)
      buttons = buttons + line
    } else {
      const line = (`
        <li class="page-item"><a class="page-link links" id="${i}" href="#">${i}</a></li>
        `)
      buttons = buttons + line
    }
  }

  // create previous, next, first, last buttons
  let previous = ''
  let next = ''
  let first = ''
  let last = ''
  if (storeData.page > 1) {
    previous = (`<li class="page-item"><a class="page-link links" id="${storeData.page - 1}" href="#">&lt;</a></li>`)
    first = ('<li class="page-item"><a class="page-link links" id="1" href="#">&lt;&lt;</a></li>')
  }
  if (storeData.page < pages) {
    next = (`<li class="page-item"><a class="page-link links" id="${storeData.page + 1}" href="#">&gt;</a></li>`)
    last = (`<li class="page-item"><a class="page-link links" id="${pages}" href="#">&gt;&gt;</a></li>`)
  }
  // put everthing together
  buttons = first + previous + buttons + next + last

  // show them on browser
  $('.pagination').html(buttons)
}

module.exports = {
  makeButtons,
  pageCount
}
