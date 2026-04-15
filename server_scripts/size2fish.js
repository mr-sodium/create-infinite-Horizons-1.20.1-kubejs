PlayerEvents.inventoryChanged(event => {
  const player = event.player
  if(player.mainHandItem.id !== 'minecraft:fishing_rod'){return}
  player.inventory.items.forEach(item => {
    if (item.hasTag('minecraft:fishes')) {
      event.player.setStatusMessage(Text.gold('Size: 1'))
    }
    if (item.hasTag('minecraft:c_fish_size_2')){
      event.player.setStatusMessage(('§dSize: 2'))
    }
  })
})