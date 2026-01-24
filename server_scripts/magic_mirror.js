ItemEvents.rightClicked(event => {
  const player = event.player
  const item = event.item
  const spawnPos = player.getRespawnPosition()

  if (item.id !== "kubejs:magic_mirror") return

  if (!spawnPos) {
    let newspawnPos = player.level.getSharedSpawnPos()
    player.teleportTo(
    newspawnPos.x + 0.5,
    newspawnPos.y + 0.6,
    newspawnPos.z + 0.5
  )
  }else{
    player.teleportTo(
    spawnPos.x + 0.5,
    spawnPos.y + 0.6,
    spawnPos.z + 0.5
  )}
})
