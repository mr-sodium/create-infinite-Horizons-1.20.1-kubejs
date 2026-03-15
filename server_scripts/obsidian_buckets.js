ItemEvents.entityInteracted('kubejs:obsidian_bucket', event => {
   const {item, player, target} = event

   if(event.target.type != 'minecraft:cow') return
   item.shrink(1)
   player.giveInHand('kubejs:obsidian_milk_bucket')
   target.playSound('minecraft:entity.cow.milk')
})

ItemEvents.rightClicked(event => {
    const { player, item, level, target, hand } = event
    const reach = 4.5
    const dimension = player.level.dimension.toString()

    if (dimension == "minecraft:the_nether" && item.id == "kubejs:obsidian_water_bucket") return
    
    const placeMap = {
        'kubejs:obsidian_water_bucket': 'minecraft:water',
        'kubejs:obsidian_lava_bucket': 'minecraft:lava',
        'kubejs:obsidian_powder_snow_bucket': 'minecraft:powder_snow'
    }

    const fluidToPlace = placeMap[item.id]
    if (!fluidToPlace) return

    const result = player.rayTrace(reach, true)
    if (!result || !result.block) return

    let placed = false
    const block = result.block
    
    if (block == fluidToPlace) {
        if (block.properties.level != 0) {
            block.set(fluidToPlace)
            placed = true
        }
    } else if ((block == 'minecraft:water' && fluidToPlace != 'minecraft:water') || (block == 'minecraft:lava' && fluidToPlace != 'minecraft:lava')) {
        block.set(fluidToPlace)
        placed = true
    } else {
        const placePos = block.offset(result.facing)
        const targetBlock = level.getBlock(placePos)
        const belowBlock = level.getBlock(placePos.offset(0, -1, 0))
        
        if (belowBlock && belowBlock.id == fluidToPlace && target.block.id != 'minecraft:powder_snow') return

        if ((targetBlock.id == 'minecraft:air' || targetBlock.canBeReplaced())) {
            targetBlock.set(fluidToPlace)
            placed = true
        }
    }

    if (placed) {
        player.swing()

        if (fluidToPlace == 'minecraft:water') {
            event.server.runCommandSilent(`/playsound minecraft:item.bucket.empty block @p ${player.x} ${player.y} ${player.z} 1 1`)
        } else if (fluidToPlace == 'minecraft:lava') {
           event.server.runCommandSilent(`/playsound minecraft:item.bucket.empty_lava block @p ${player.x} ${player.y} ${player.z} 1 1`)
        } else if (fluidToPlace == 'minecraft:powder_snow') {
           event.server.runCommandSilent(`/playsound minecraft:item.bucket.empty_powder_snow block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }

        if (!player.creative) {
            item.shrink(1)
            player.setHeldItem(hand, 'kubejs:obsidian_bucket')
        }
    }
})

ItemEvents.rightClicked(event => {
    const { player, item, hand } = event
    const reach = 4.5

    if (item.id !== 'kubejs:obsidian_bucket') return

    const result = player.rayTrace(reach, true)
    if (!result || !result.block) return

    const block = result.block
    let pickedUpItem = null
    let sound = ''

    if (block.id == 'minecraft:water' && block.properties.level == 0) {
        pickedUpItem = 'kubejs:obsidian_water_bucket'
        sound = 'minecraft:item.bucket.fill'
    } else if (block.id == 'minecraft:lava' && block.properties.level == 0) {
        pickedUpItem = 'kubejs:obsidian_lava_bucket'
        sound = 'minecraft:item.bucket.fill_lava'
    } else if (block.id == 'minecraft:powder_snow') {
        pickedUpItem = 'kubejs:obsidian_powder_snow_bucket'
        sound = 'minecraft:item.bucket.fill_powder_snow'
    }

    if (pickedUpItem) {
        block.set('minecraft:air')
        player.swing()
        
        event.server.runCommandSilent(`/playsound ${sound} block @p ${player.x} ${player.y} ${player.z} 1 1`)

        if (!player.creative) {
            item.shrink(1)
            if (item.empty) {
                player.setHeldItem(hand, pickedUpItem)
            } else {
                player.give(pickedUpItem)
            }
        } else if (player.creative) {
            if (!player.inventory.contains(pickedUpItem)) {
                player.give(pickedUpItem)
            }
        }
    }
})