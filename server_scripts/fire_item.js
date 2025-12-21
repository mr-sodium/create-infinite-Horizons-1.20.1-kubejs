PlayerEvents.tick(event => {
    const {player} = event
    const fire_item = 'kubejs:blazing_upgrade_template'

    if (player.level.isClientSide()) return
        if (player.mainHandItem.id == fire_item || player.offHandItem.id == fire_item) {
        player.setSecondsOnFire(2)
    }
})
