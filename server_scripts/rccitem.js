ItemEvents.rightClicked(event => {
  const item = event

  if (item.hasTag('minecraft:c_rccitems')) {
    event.server.runCommand('gamerule sendCommandFeedback false')
  }
})
