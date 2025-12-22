ItemEvents.rightClicked('kubejs:obsidian_bucket', event => {
   const {player, item, target} = event
   
   if (target && target.block && target.block.id == 'minecraft:lava' && target.block.properties.level == 0) {
      target.block.set('minecraft:air')
      item.count--
      player.give('kubejs:obsidian_lava_bucket')
      event.cancel()
   }
})

ItemEvents.rightClicked('kubejs:obsidian_lava_bucket', event => {
   const {player, item, target, level} = event

   if (target.block.id == 'minecraft:lava') return
   if (target.block.id == 'minecraft:water') return
   if (target.type == 'BLOCK') {
      let placePos = target.block.pos.relative(target.facing)
      level.getBlock(placePos).set('minecraft:lava')
      item.count--
      player.give('kubejs:obsidian_bucket')
      event.cancel()
   }
})

ItemEvents.rightClicked('kubejs:obsidian_bucket', event => {
   const {player, item, target} = event
    
   if (target && target.block && target.block.id == 'minecraft:water' && target.block.properties.level == 0) {
      target.block.set('minecraft:air')
      item.count--
      player.give('kubejs:obsidian_water_bucket')
      event.cancel()
   }
})

ItemEvents.rightClicked('kubejs:obsidian_water_bucket', event => {
   const {player, item, target, level} = event

   if (target.block.id == 'minecraft:lava') return
   if (target.block.id == 'minecraft:water') return
   if (target.type == 'BLOCK') {
      let placePos = target.block.pos.relative(target.facing)
      level.getBlock(placePos).set('minecraft:water')
      item.count--
      player.give('kubejs:obsidian_bucket')
      event.cancel()
   }
})