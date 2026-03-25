ItemEvents.rightClicked('kubejs:dagger', event => {
    const { item, player, hand, server } = event
    
    if (hand != 'MAIN_HAND') return

    if (!player.creative) {
        player.attack(5.0)
        
        item.damageValue += 2
        
        if (item.damageValue >= item.maxDamage) {
            item.count--
            event.server.runCommandSilent(`/playsound minecraft:entity.item.break block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
    }
})
