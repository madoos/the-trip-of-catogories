const { pipe, prop, toLower, concat, __, assoc, map } = require("ramda")
const Maybe = require("./src/maybe")

// createEmail :: Object -> Maybe Object
const createEmail = pipe(
  Maybe.of,
  map(prop("name")),
  map(
    pipe(
      toLower,
      concat(__, "@email.com"),
      assoc("email", __, {})
    )
  )
)

module.exports = createEmail
