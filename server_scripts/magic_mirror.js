ItemEvents.rightClicked(event => {
  const player = event.player
  const item = event.item
  const spawnPos = player.getRespawnPosition()

  if (item.id !== "kubejs:magic_mirror") {return} 
  event.server.runCommand(`/playsound block.beacon.deactivate master @p ${player.x} ${player.y} ${player.z} 2 0.9`);
  console.log(player.level.id) // cannot parse dimention rn FIX
  if (player.dimension.id === 'minecraft:overworld'){

    if (!spawnPos) {
      let newspawnPos = player.level.getSharedSpawnPos()
      player.teleportTo(
      newspawnPos.x + 0.5,
      newspawnPos.y + 0.6,
      newspawnPos.z + 0.5
    )}else{
      player.teleportTo(
      spawnPos.x + 0.5,
      spawnPos.y + 0.6,
      spawnPos.z + 0.5
    )}
  }else{
    event.server.runCommand(`/playsound block.beacon.deactivate master @p ${player.x} ${player.y} ${player.z} 2 0.9`);

  }
})
