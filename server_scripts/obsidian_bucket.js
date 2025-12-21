BlockEvents.rightClicked(event => {
  const bucket = 'kubejs:obsidian_bucket'
  const lava_bucket = 'kubejs:obsidian_lava_bucket'
  const {player} = event

   if (player.mainHandItem.id == bucket) {
      event.item.count--
      player.giveInHand(lava_bucket)
   }
})
