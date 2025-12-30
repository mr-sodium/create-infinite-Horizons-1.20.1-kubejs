ItemEvents.rightClicked('kubejs:obsidian_bucket', event => {
   const {player, item, target} = event
   
   if (player.creative) {
      if (target && target.block && target.block.id == 'minecraft:lava' && target.block.properties.level == 0) {
         target.block.set('minecraft:air')
         player.give('kubejs:obsidian_lava_bucket')
         player.swing()
         event.cancel()
      }
   }
   if (!player.creative) {
      if (target && target.block && target.block.id == 'minecraft:lava' && target.block.properties.level == 0) {
         target.block.set('minecraft:air')
         item.count--
         player.give('kubejs:obsidian_lava_bucket')
         player.swing()
         event.cancel()
      }
   }

   if (target && target.block && target.block.id == 'minecraft:water' && target.block.properties.level == 0) {
      target.block.set('minecraft:air')
      item.count--
      player.give('kubejs:obsidian_water_bucket')
      player.swing()
      event.cancel()
   }
   if (target && target.block && target.block.id == 'minecraft:powder_snow') {
      target.block.set('minecraft:air')
      item.count--
      player.give('kubejs:obsidian_powder_snow_bucket')
      player.swing()
      event.cancel()
   }
})

ItemEvents.rightClicked('kubejs:obsidian_lava_bucket', event => {
   const {player, item, target, level} = event

   if (target.block.id == 'minecraft:water') return

      if (player.creative){
      if (target && target.block && target.block.id == 'minecraft:lava') {
         target.block.set('minecraft:lava')
      }
      if (target.type == 'BLOCK' && target.block.id != 'minecraft:lava') {
         let placePos = target.block.pos.relative(target.facing)
         level.getBlock(placePos).set('minecraft:lava')
      }
      player.swing()
      event.cancel()
   }
   
   if (!player.creative) {
      if (target && target.block && target.block.id == 'minecraft:lava') {
         target.block.set('minecraft:lava')
         item.count--
         player.give('kubejs:obsidian_bucket')
      }
      if (target.type == 'BLOCK' && target.block.id != 'minecraft:lava') {
         let placePos = target.block.pos.relative(target.facing)
         level.getBlock(placePos).set('minecraft:lava')
         item.count--
         player.give('kubejs:obsidian_bucket')
      }
      player.swing()
      event.cancel()
   }

})

ItemEvents.rightClicked('kubejs:obsidian_water_bucket', event => {
   const {player, item, target, level} = event

   if (target.block.id == 'minecraft:lava') return

   if (player.creative){
      if (target && target.block && target.block.id == 'minecraft:water') {
         target.block.set('minecraft:water')
      }
      if (target.type == 'BLOCK' && target.block.id != 'minecraft:water') {
         let placePos = target.block.pos.relative(target.facing)
         level.getBlock(placePos).set('minecraft:water')
      }
      player.swing()
      event.cancel()
   }
   
   if (!player.creative) {
      if (target && target.block && target.block.id == 'minecraft:water') {
         target.block.set('minecraft:water')
         item.count--
         player.give('kubejs:obsidian_bucket')
      }
      if (target.type == 'BLOCK' && target.block.id != 'minecraft:water') {
         let placePos = target.block.pos.relative(target.facing)
         level.getBlock(placePos).set('minecraft:water')
         item.count--
         player.give('kubejs:obsidian_bucket')
      }
      player.swing()
      event.cancel()
   }
})

ItemEvents.rightClicked('kubejs:obsidian_powder_snow_bucket', event => {
   const {player, item, target, level} = event

   if (player.creative) {
      if (target.type == 'BLOCK') {
         let placePos = target.block.pos.relative(target.facing)
         level.getBlock(placePos).set('minecraft:powder_snow')
      }
      player.swing()
      event.cancel()
   }
   if (!player.creative) {
      if (target.type == 'BLOCK') {
         let placePos = target.block.pos.relative(target.facing)
         level.getBlock(placePos).set('minecraft:powder_snow')
         item.count--
         player.give('kubejs:obsidian_bucket')
      }
      player.swing()
      event.cancel()
   }
})