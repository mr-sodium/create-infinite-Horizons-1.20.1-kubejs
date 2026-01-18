ItemEvents.rightClicked('kubejs:obsidian_bucket', event => {
    const {item, target, player} = event
    const targetBlock = target.block
    const targetBlockId = targetBlock.id
    const fillMap = {
        'minecraft:water': 'kubejs:obsidian_water_bucket',
        'minecraft:lava': 'kubejs:obsidian_lava_bucket',
        'minecraft:powder_snow': 'kubejs:obsidian_powder_snow_bucket'
    }
    
    if (!player.creative) {
        item.shrink(1)
    }
    if (fillMap[targetBlockId] && (targetBlock.properties.level == 0 || target.block.id == 'minecraft:powder_snow')) {
        targetBlock.set('minecraft:air')
        const filledBucketId = fillMap[targetBlockId]
        player.give(filledBucketId)
        player.swing()
        event.cancel()
    }
})

ItemEvents.rightClicked(event => {
    const { item, target, player, level } = event
    
    const placeMap = {
        'kubejs:obsidian_water_bucket': 'minecraft:water',
        'kubejs:obsidian_lava_bucket': 'minecraft:lava',
        'kubejs:obsidian_powder_snow_bucket': 'minecraft:powder_snow'
    }

    const fluidToPlace = placeMap[item.id]

    if (fluidToPlace) {
        const placePos = target.block.offset(target.facing)
        const targetBlock = level.getBlock(placePos)
        
        if (targetBlock.id == 'minecraft:air' && target.block.properties.level != 0 || targetBlock.canBeReplaced()) {
            targetBlock.set(fluidToPlace)
            player.swing()
            event.cancel()
        }
    }
})