// Filter
const _ = require('lodash')

const filter = (collection) => {
  return _.filter(collection, { active: true })
}

module.exports = filter

// SortBy
const sortBy = (data) => {
  return _.sortBy(data, 'quantity').reverse()
}

module.exports = sortBy
