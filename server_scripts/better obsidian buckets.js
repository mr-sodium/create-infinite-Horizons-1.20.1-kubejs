ItemEvents.rightClicked('kubejs:obsidian_bucket', event => {
    const {item, target, player} = event
    const targetBlock = target.block
    const targetBlockId = targetBlock.id
    const bucketMap = {
        'minecraft:water': 'kubejs:obsidian_water_bucket',
        'minecraft:lava': 'kubejs:obsidian_lava_bucket',
        'minecraft:powder_snow': 'kubejs:obsidian_powder_snow_bucket'
    }

    if(!player.creative) {
        item.shrink(1)
    }
    if (bucketMap[targetBlockId] && targetBlock.properties.level == 0 || target.block.id == 'minecraft:powder_snow') {
        targetBlock.set('minecraft:air')
        const filledBucketId = bucketMap[targetBlockId]
        player.give(filledBucketId)
        player.swing()
        event.cancel()
    }
})