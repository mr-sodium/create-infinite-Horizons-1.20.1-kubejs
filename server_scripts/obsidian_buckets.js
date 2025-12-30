ItemEvents.rightClicked('kubejs:obsidian_bucket', event => {
   const {player,level} = event
   
   const dist = 4.5
   const blockpicked = player.rayTrace(dist).block

   if (blockpicked.id == 'minecraft:lava'&& blockpicked.properties.level <= 0){
   player.rayTrace(dist).block.set('minecraft:air')
   player.getSlot(player.selectedSlot).set('kubejs:obsidian_lava_bucket')
   return
   }
   if (blockpicked.id == 'minecraft:water'&& blockpicked.properties.level <= 0){
   player.rayTrace(dist).block.set('minecraft:air')
   player.getSlot(player.selectedSlot).set('kubejs:obsidian_water_bucket')
   return
   }
})

ItemEvents.rightClicked('kubejs:obsidian_lava_bucket', event => {
   const { player } = event

   const dist = 4.5
   const dir = player.facing

   if(dir == 'north'){
      if(   player.rayTrace(dist).block.offset(0,0,1) == 'minecraft:air'){
         player.rayTrace(dist).block.offset(0,0,1).set('minecraft:lava')
      }
   }
   if(dir == 'east'){
      if(   player.rayTrace(dist).block.offset(-1,0,0) == 'minecraft:air'){
         player.rayTrace(dist).block.offset(-1,0,0).set('minecraft:lava')
      }
   }
   if(dir == 'south'){
      if(   player.rayTrace(dist).block.offset(0,0,-1) == 'minecraft:air'){
         player.rayTrace(dist).block.offset(0,0,-1).set('minecraft:lava')
      }
   }
   if(dir == 'west'){
      if(   player.rayTrace(dist).block.offset(1,0,0) == 'minecraft:air'){
         player.rayTrace(dist).block.offset(1,0,0).set('minecraft:lava')
      }
   }
   if(dir == 'up'){
      if(   player.rayTrace(dist).block.offset(0,-1,0) == 'minecraft:air'){
         player.rayTrace(dist).block.offset(0,-1,0).set('minecraft:lava')
      }
   }
   if(dir == 'down'){
      if(   player.rayTrace(dist).block.offset(0,1,0) == 'minecraft:air'){
         player.rayTrace(dist).block.offset(0,1,0).set('minecraft:lava')
      }
   }


   //console.log(blockpicked);
   //console.log(blockpos.offset(0,-1,0));
   //console.log(dir);
/*
   if (blockpicked.id == 'minecraft:lava' && blockpicked.properties.level <= 0){
   player.rayTrace(dist).block.set('minecraft:air')
   player.getSlot(player.selectedSlot).set('kubejs:obsidian_lava_bucket');
   return;
   }
   if (blockpicked.id == 'minecraft:water'&& blockpicked.properties.level <= 0){
   player.rayTrace(dist).block.set('minecraft:air')
   player.getSlot(player.selectedSlot).set('kubejs:obsidian_water_bucket');
   return;
   }
*/
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