const { pipe } = require("ramda")

const IO = impureAction => ({
  map: f =>
    IO(
      pipe(
        impureAction,
        f
      )
    ),
  run: impureAction,
  inspect: () => "IO(?)",
  join: () => IO(() => impureAction().run()),
  chain(f) {
    return this.map(f).join()
  }
})

IO.of = value => IO(() => value)

// (* -> a) -> (* -> IO a)
IO.as = f => (...args) => IO(() => f(...args))

module.exports = IO
