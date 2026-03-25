ItemEvents.rightClicked('kubejs:dagger', event => {
    const { item, player, hand, server, level } = event
    const reach = 4.5
    const result = player.rayTrace(reach, true)
    if (hand != 'MAIN_HAND') return

    if (!player.creative) {
        player.attack(5.0)
        
        item.damageValue += 2
        
        if (item.damageValue >= item.maxDamage) {
            item.count--
            server.runCommandSilent(`/playsound minecraft:entity.item.break block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
    }
    console.log(result.block.x+1)
    if(result.block == 'minecraft:red_concrete'){   //red concrete is to be replaced with spell funnel
        if(level.getBlock(result.block.x + 1, result.block.y, result.block.z).id == 'minecraft:yellow_concrete' && level.getBlock(result.block.x - 1, result.block.y, result.block.z).id == 'minecraft:yellow_concrete' && level.getBlock(result.block.x, result.block.y, result.block.z + 1).id == 'minecraft:yellow_concrete' && level.getBlock(result.block.x, result.block.y, result.block.z - 1).id == 'minecraft:yellow_concrete' ){
            console.log("testdone")
        }
    }
})
