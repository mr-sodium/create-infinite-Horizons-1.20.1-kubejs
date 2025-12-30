PlayerEvents.tick(event => {
    const {player} = event
    const burn_baby_burn = 'kubejs:blazing_upgrade_template'
    const lava_burn = 'minecraft:lava_bucket'

    if (player.level.isClientSide()) return

    if (player.mainHandItem.id == burn_baby_burn || player.offHandItem.id == burn_baby_burn) {
        player.setSecondsOnFire(2)
    }
    
    if (!player.creative) {
        if (player.mainHandItem.id == lava_burn || player.offHandItem.id == lava_burn) {
<<<<<<< Updated upstream
        player.setSecondsOnFire(3)
        player.getSlot(player.selectedSlot).set('minecraft:air');
    }    
=======
            player.getSlot(player.selectedSlot).set('minecraft:air')
            player.setSecondsOnFire(3)
        } 
    }
>>>>>>> Stashed changes
})
