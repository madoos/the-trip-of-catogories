const { pipe, prop, toLower, concat, __, assoc } = require("ramda")

// createEmail :: Object -> Object
const createEmail = pipe(
  prop("name"),
  toLower,
  concat(__, "@email.com"),
  assoc("email", __, {})
)

module.exports = createEmail
