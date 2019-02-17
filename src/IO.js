const { pipe } = require("ramda")

const IO = impureAction => ({
  map: f =>
    IO(
      pipe(
        impureAction,
        f
      )
    ),
  run: impureAction
})

IO.of = value => IO(value)

module.exports = IO
