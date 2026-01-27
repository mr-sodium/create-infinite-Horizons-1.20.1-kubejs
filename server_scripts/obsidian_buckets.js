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
        if (targetBlockId == 'minecraft:water') {
            event.server.runCommand(`/playsound minecraft:item.bucket.fill master @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
        if (targetBlockId == 'minecraft:lava') {
            event.server.runCommand(`/playsound minecraft:item.bucket.fill_lava master @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
        if (targetBlockId == 'minecraft:powder_snow') {
            event.server.runCommand(`/playsound minecraft:item.bucket.fill_powder_snow master @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
        event.cancel()
    }
})

ItemEvents.rightClicked(event => {
    const { item, target, player, level } = event
    const targetBlockId = target.block.id
    const fluidState = target.block.properties.level
    const placeMap = {
        'kubejs:obsidian_water_bucket': 'minecraft:water',
        'kubejs:obsidian_lava_bucket': 'minecraft:lava',
        'kubejs:obsidian_powder_snow_bucket': 'minecraft:powder_snow'
    }
    const fluidToPlace = placeMap[item.id]

    if (!fluidToPlace) return

    let placed = false 
    if (targetBlockId == fluidToPlace && fluidState != 0) {
        target.block.set(fluidToPlace)
        player.swing()
        placed = true
    } else {
        const placePos = target.block.offset(target.facing)
        const targetBlock = level.getBlock(placePos)
        const belowBlock = level.getBlock(placePos.offset(0, -1, 0))

        if (belowBlock && belowBlock.id == fluidToPlace && targetBlockId != 'minecraft:powder_snow') {
            return
        }

        if (targetBlock.id == 'minecraft:air' || targetBlock.canBeReplaced()) {
            targetBlock.set(fluidToPlace)
            player.swing()
            placed = true
        }
    }

    if (placed) {
        if (fluidToPlace == 'minecraft:water') {
            event.server.runCommand(`/playsound minecraft:item.bucket.empty block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
        if (fluidToPlace == 'minecraft:lava') {
            event.server.runCommand(`/playsound minecraft:item.bucket.empty_lava block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
        if (fluidToPlace == 'minecraft:powder_snow') {
            event.server.runCommand(`/playsound minecraft:item.bucket.empty_powder_snow block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
        
        if (!player.creative) {
            item.shrink(1)
            player.give('kubejs:obsidian_bucket')
        }
        event.cancel()
    }
})
