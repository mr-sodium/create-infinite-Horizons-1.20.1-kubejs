PlayerEvents.tick(event => {
    const {player} = event
    const template_burn = 'kubejs:blazing_upgrade_template'
    const lava_burn = 'minecraft:lava_bucket'

    if (player.level.isClientSide()) return

    if (player.mainHandItem.id == template_burn || player.offHandItem.id == template_burn) {
        player.setSecondsOnFire(4)
    }
    if (!player.creative) {
        if (player.mainHandItem.id == lava_burn || player.offHandItem.id == lava_burn) {
        player.getSlot(player.selectedSlot).set('minecraft:air')
        player.setSecondsOnFire(4)
        }
    }    
})
