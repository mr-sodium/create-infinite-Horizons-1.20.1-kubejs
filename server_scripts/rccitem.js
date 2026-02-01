ItemEvents.rightClicked(event => {
  const item = event.item

  if (item.hasTag('minecraft:c_rccitems')) {
    event.server.runCommand('gamerule sendCommandFeedback false')
  }
})