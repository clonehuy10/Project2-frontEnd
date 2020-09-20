'use strict'
const state = {
  page: 1,
  limit: 4
}

const pagination = function (data, page, limit) {
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const result = data.slice(startIndex, endIndex)

  const numberOfPage = Math.ceil(data.length / limit)

  return {
    result,
    numberOfPage
  }
}

const makeButtons = function (pages) {
  console.log('numberOfPage', pages)
  for (let i = 1; i <= pages; i++) {
    $('.pagination').append(`
    <button value=${i} class="pageButton" type="button">${i}</button>
    `)

    $('.pageButton').on('click', function () {
      state.page = $('.pageButton').val()

      buildPagination()
    })
  }
}

const buildPagination = function (data) {
  const currentPage = pagination(data, state.page, state.limit)

  makeButtons(currentPage.numberOfPage)
}

module.exports = {
  buildPagination
}
