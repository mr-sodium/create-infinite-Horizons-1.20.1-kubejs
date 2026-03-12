StartupEvents.registry('block', event => {
  event.create('budding_durite')
    .displayName('Budding Durite')
    .soundType('amethyst')
    .tagBlock('minecraft:mineable/pickaxe')
    .randomTick(tickEvent => {
        const { block, level } = tickEvent
        
        if (Math.random() < 0.2) {
            const directions = [Direction.UP, Direction.DOWN, Direction.NORTH, Direction.SOUTH, Direction.EAST, Direction.WEST]
            let side = directions[Math.floor(Math.random() * directions.length)]
            
            let targetPos = block.pos.relative(side)
            let targetBlock = level.getBlock(targetPos)
            
            if (targetBlock.id == 'minecraft:air') {
                targetBlock.set(`dungeonnowloading:small_durite_bud`, { facing: side})
            } else if (targetBlock.id == 'dungeonnowloading:small_durite_bud') {
                targetBlock.set(`dungeonnowloading:medium_durite_bud`, { facing: side})
            } else if (targetBlock.id == 'dungeonnowloading:medium_durite_bud') {
                targetBlock.set(`dungeonnowloading:large_durite_bud`, { facing: side})
            } else if (targetBlock.id == 'dungeonnowloading:large_durite_bud') {
                targetBlock.set(`dungeonnowloading:durite_cluster`, { facing: side})
            }
        }
    })
})