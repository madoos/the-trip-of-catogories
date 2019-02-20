const { pipe, prop, toLower, concat, __, assoc, map, chain } = require("ramda")
const { promptUserNameSync } = require("./src/utils")
const Maybe = require("./src/maybe")
const IO = require("./src/IO")

// getName :: {name: String} -> String
const getName = prop("name")

// formatEmail :: String -> {email: String}
const formatEmail = pipe(
  toLower,
  concat(__, "@email.com"),
  assoc("email", __, {})
)

// createEmail :: {name: String} -> Maybe {email: String}
const createEmail = pipe(
  Maybe.of,
  map(getName),
  map(formatEmail)
)

// createEmailFromIO :: String -> OI Maybe Object
const createEmailFromIO = pipe(
  text => IO(() => promptUserNameSync(text)),
  map(createEmail),
  chain(data => IO(() => console.log(data)))
)

module.exports = createEmailFromIO
