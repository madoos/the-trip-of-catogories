const Identity = value => {
  return {
    map: f => Identity(f(value)),
    inspect: () => `Identity(${value})`
  }
}

Identity.of = value => Identity(value)

module.exports = Identity
