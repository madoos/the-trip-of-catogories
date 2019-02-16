const Identity = value => {
  map: f => Identity(f(value))
}
module.exports = Identity
