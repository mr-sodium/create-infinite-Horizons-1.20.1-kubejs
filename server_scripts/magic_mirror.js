ItemEvents.rightClicked(event => {
  const player = event.player
  const item = event.item
  const spawnPos = player.getRespawnPosition()

  const dimension = player.level.dimension.toString()


  //blake this checks if you hold thing
  if (item.id !== "kubejs:magic_mirror") {return} 
  
  // for debug
  console.log(dimension) 
  
  // do not delete, this if for the future
  if (dimension == "minecraft:overworld" && player.hasCooldown(item.id)){

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
    // put damage item code here
  }else{
    event.server.runCommand(`/playsound block.beacon.deactivate master @p ${player.x} ${player.y} ${player.z} 2 0.9`)
  }
})
