ItemEvents.rightClicked(event => {
  const {player, item, hand} = event
  const spawnPos = player.getRespawnPosition()
  const respawnDim = player.getRespawnDimension()
  const dimension = player.level.dimension.toString()
  const cooldowntime = 600;
  const mirrors = [
  "kubejs:magic_mirror",
  "kubejs:cracked_magic_mirror",
  "kubejs:damaged_magic_mirror",
  "kubejs:broken_magic_mirror"
  ]
  
  if (hand !== 'MAIN_HAND') return

  if (!mirrors.includes(item.id) || respawnDim !== "minecraft:overworld") {
    return
  }

  if (dimension == "minecraft:overworld" && item.id !== "kubejs:broken_magic_mirror"){
    if (!spawnPos) {
      let newspawnPos = player.level.getSharedSpawnPos()
      player.teleportTo(
      newspawnPos.x + 0.5,
      newspawnPos.y + 0.5,
      newspawnPos.z + 0.5
    )}else{
      player.teleportTo(
      spawnPos.x + 0.5,
      spawnPos.y + 0.5625,
      spawnPos.z + 0.5
    )}

    event.server.runCommand(`/playsound minecraft:block.amethyst_block.step block @p ${player.x} ${player.y} ${player.z} 1 1.3`)
    event.server.runCommand(`/playsound minecraft:block.bone_block.place block @p ${player.x} ${player.y} ${player.z} 3 2`)
    event.server.runCommand(`/playsound minecraft:block.amethyst_block.break block @p ${player.x} ${player.y} ${player.z} 1 0.2`)
    
    if(!player.creative){
      if(item.id == "kubejs:magic_mirror"){
        player.setItemInHand(hand, Item.of("kubejs:cracked_magic_mirror"))
      }
      if(item.id == "kubejs:cracked_magic_mirror"){
        player.setItemInHand(hand, Item.of("kubejs:damaged_magic_mirror"))
      }
      if(item.id == "kubejs:damaged_magic_mirror"){
        player.setItemInHand(hand, Item.of("kubejs:broken_magic_mirror"))
        event.server.runCommand(`/playsound minecraft:block.glass.break block @p ${player.x} ${player.y} ${player.z} 1.5 0.7`)
      }}
    player.addItemCooldown("kubejs:magic_mirror", cooldowntime)
    player.addItemCooldown("kubejs:cracked_magic_mirror", cooldowntime)
    player.addItemCooldown("kubejs:damaged_magic_mirror", cooldowntime)
    
  }else{
    event.server.runCommand(`/playsound block.beacon.deactivate block @p ${player.x} ${player.y} ${player.z} 2 0.9`)
    player.addItemCooldown("kubejs:broken_magic_mirror", cooldowntime)
  }
})