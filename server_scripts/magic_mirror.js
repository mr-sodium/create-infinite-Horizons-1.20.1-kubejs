ItemEvents.rightClicked(event => {
  const {player, item, hand} = event
  const spawnPos = player.getRespawnPosition()
  const dimension = player.level.dimension.toString()

  if (item.id !== "kubejs:magic_mirror" && item.id !== "kubejs:damaged_magic_mirror" && item.id !== "kubejs:broken_magic_mirror" && item.id !== "kubejs:cracked_magic_mirror") {
    return
  }
  event.server.runCommand(`gamerule sendCommandFeedback false`)
  if (dimension == "minecraft:overworld" && item.id !== "kubejs:broken_magic_mirror"){
    if (!spawnPos) {
      let newspawnPos = player.level.getSharedSpawnPos()
      player.teleportTo(
      newspawnPos.x + 0.5,
      newspawnPos.y + 0.6,
      newspawnPos.z + 0.5
    )}else{
      player.teleportTo(
      spawnPos.x + 0.5,
      spawnPos.y + 0.5625,
      spawnPos.z + 0.5
    )}

    event.server.runCommand(`/playsound minecraft:block.amethyst_block.step master @p ${player.x} ${player.y} ${player.z} 1 1.3`)
    event.server.runCommand(`/playsound minecraft:block.bone_block.place master @p ${player.x} ${player.y} ${player.z} 3 2`)
    event.server.runCommand(`/playsound minecraft:block.amethyst_block.break master @p ${player.x} ${player.y} ${player.z} 1 0.2`)
    
    if(!player.creative){
      if(item.id == "kubejs:magic_mirror"){
        player.setItemInHand(hand, Item.of("kubejs:cracked_magic_mirror"))
      }
      if(item.id == "kubejs:cracked_magic_mirror"){
        player.setItemInHand(hand, Item.of("kubejs:damaged_magic_mirror"))
      }
      if(item.id == "kubejs:damaged_magic_mirror"){
        player.setItemInHand(hand, Item.of("kubejs:broken_magic_mirror"))
        event.server.runCommand(`/playsound minecraft:block.glass.break master @p ${player.x} ${player.y} ${player.z} 1.5 0.7`)
      }}
  }else{
    event.server.runCommand(`/playsound block.beacon.deactivate master @p ${player.x} ${player.y} ${player.z} 2 0.9`)
  }
})