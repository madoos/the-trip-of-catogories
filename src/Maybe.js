const Nothing = () => {
  return {
    map() {
      return this
    },
    inspect() {
      return `Nothing()`
    }
  }
}

const Just = val => {
  return {
    map(f) {
      return Just(f(val))
    },
    inspect() {
      return typeof val === "object"
        ? `Just(${JSON.stringify(val, null, 1)})`
        : `Just(${val})`
    }
  }
}

const Maybe = val => ({
  map: f => {
    const res = f(val)
    return res === null || res === undefined ? Nothing() : Just(res)
  }
})

Maybe.of = val => Maybe(val)
Maybe.Nothing = Nothing
Maybe.Just = Just
module.exports = Maybe
