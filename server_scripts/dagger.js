ItemEvents.rightClicked('kubejs:dagger', event => {
    const { item, player, hand } = event
    
    if (hand != 'MAIN_HAND') return

    if (!player.creative) {
        player.attack(5.0)
        
        item.damageValue += 2
        
        if (item.damageValue >= item.maxDamage) {
            item.count--
            player.playSound('minecraft:entity.item.break')
        }
    }
})
