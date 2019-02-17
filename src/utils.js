const rl = require("readline-sync")

// promptUserNameSync :: String -> Object | null
const promptUserNameSync = text => {
  const value = rl.question(text).trim()
  return Boolean(value) ? { name: value } : null
}

module.exports = {
  promptUserNameSync
}
