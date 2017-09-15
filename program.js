const _ = require('lodash')

const filter = (collection) => {
  return _.filter(collection, { active: true })
}

module.exports = filter
