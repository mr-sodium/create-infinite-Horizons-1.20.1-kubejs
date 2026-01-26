PlayerEvents.tick(event => {
    const {player} = event
    const template_burn = 'kubejs:blazing_upgrade_template'
    const lava_burn = 'minecraft:lava_bucket'
    const cheese_burn = 'cheesus:cheese_from_hell'

    if (player.level.isClientSide()) return

    if (player.mainHandItem.id == template_burn || player.offHandItem.id == template_burn) {
        player.setSecondsOnFire(4)
    }
    if (!player.creative) {
        if (player.mainHandItem.id == lava_burn || player.offHandItem.id == lava_burn) {
            player.getSlot(player.selectedSlot).set('minecraft:air')
            player.setSecondsOnFire(4)
        }
        if (player.mainHandItem.id == cheese_burn || player.offHandItem.id == cheese_burn) {
            player.setSecondsOnFire(4)
        }
    }    
})
