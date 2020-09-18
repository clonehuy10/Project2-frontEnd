'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const getAllThreads = function () {
  api.getAll()
    .then(ui.onGetAllSuccess)
    .catch(ui.onGetAllFailure)
}
const onCreateThread = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.createThread(data)
    .then(ui.onCreateThreadSuccess)
    .catch(ui.onCreateThreadFailure)
}

module.exports = {
  getAllThreads,
  onCreateThread
}
