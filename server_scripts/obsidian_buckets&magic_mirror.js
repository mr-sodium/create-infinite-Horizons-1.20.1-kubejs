ItemEvents.entityInteracted('kubejs:obsidian_bucket', event => {
   const {item, player, target} = event

   if (event.target.type != 'minecraft:cow') return
   item.shrink(1)
   player.giveInHand('kubejs:obsidian_milk_bucket')
   target.playSound('minecraft:entity.cow.milk')
})

ItemEvents.rightClicked(event => {
    const { player, item, level, target, hand } = event
    const reach = 4.5
    const cooldowntime = 600;
    const result = player.rayTrace(reach, true)
    const dimension = player.level.dimension.toString()

    const placeMap = {
        'kubejs:obsidian_water_bucket': 'minecraft:water',
        'kubejs:obsidian_lava_bucket': 'minecraft:lava',
        'kubejs:obsidian_powder_snow_bucket': 'minecraft:powder_snow'
    }

    const mirrors = [
        "kubejs:magic_mirror",
        "kubejs:cracked_magic_mirror",
        "kubejs:damaged_magic_mirror",
        "kubejs:broken_magic_mirror"
    ]
    const spawnPos = player.getRespawnPosition()
    const respawnDim = player.getRespawnDimension()
    
    if (item.id == 'kubejs:obsidian_bucket') {
        if (!result || !result.block) return
        const block = result.block
        
        let pickedUpItem = false
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
    } else if ((item.id == 'kubejs:obsidian_water_bucket' || item.id == 'kubejs:obsidian_lava_bucket' || item.id == 'kubejs:obsidian_powder_snow_bucket') && item.id != 'kubejs:obsidian_bucket') {
        if (!result || !result.block) return
        const block = result.block

        const fluidToPlace = placeMap[item.id]
        if (!fluidToPlace) return

        
        if (dimension == "minecraft:the_nether" && item.id == "kubejs:obsidian_water_bucket") return   

        let placed = false
        
        if (block == fluidToPlace && block != 'minecraft:powder_snow') {
            if (block.properties.level != 0 && block != 'minecraft:powder_snow') {
                block.set(fluidToPlace)
                placed = true
            } else if (block.properties.level == 0 && block != 'minecraft:powder_snow') {
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
    } else {
        if (hand !== 'MAIN_HAND') return

        if (!mirrors.includes(item.id) || respawnDim !== "minecraft:overworld") return
        

        if (dimension == "minecraft:overworld" && item.id !== "kubejs:broken_magic_mirror"){
            if (!spawnPos) {
                let newspawnPos = player.level.getSharedSpawnPos()
                player.teleportTo(
                newspawnPos.x + 0.5,
                level.getHeight('WORLD_SURFACE', newspawnPos.x, newspawnPos.z) + 0.5,
                newspawnPos.z + 0.5
            )} else {
                player.teleportTo(
                spawnPos.x + 0.5,
                spawnPos.y + 0.5625,
                spawnPos.z + 0.5
            )}

                event.server.runCommandSilent(`/playsound minecraft:block.amethyst_block.step block @p ${player.x} ${player.y} ${player.z} 1 1.3`)
                event.server.runCommandSilent(`/playsound minecraft:block.bone_block.place block @p ${player.x} ${player.y} ${player.z} 3 2`)
                event.server.runCommandSilent(`/playsound minecraft:block.amethyst_block.break block @p ${player.x} ${player.y} ${player.z} 1 0.2`)

            if(!player.creative){
                if(item.id == "kubejs:magic_mirror"){
                    player.setItemInHand(hand, Item.of("kubejs:cracked_magic_mirror"))
                }
                if(item.id == "kubejs:cracked_magic_mirror"){
                    player.setItemInHand(hand, Item.of("kubejs:damaged_magic_mirror"))
                }
                if(item.id == "kubejs:damaged_magic_mirror"){
                    player.setItemInHand(hand, Item.of("kubejs:broken_magic_mirror"))
                    event.server.runCommand(`/playsound minecraft:block.glass.break block @p ${player.x} ${player.y} ${player.z} 1.5 0.7`)
                }
                player.addItemCooldown("kubejs:magic_mirror", cooldowntime)
                player.addItemCooldown("kubejs:cracked_magic_mirror", cooldowntime)
                player.addItemCooldown("kubejs:damaged_magic_mirror", cooldowntime)
                }
        } else {
                event.server.runCommandSilent(`/playsound block.beacon.deactivate block @p ${player.x} ${player.y} ${player.z} 2 0.9`)  
        }
    }
})