BlockEvents.rightClicked(event => {
    const {item, block, level, player} = event

    if (item.id == 'kubejs:mimic_spawn_egg') {

        if (level.isClientSide()) return
        
        let mimic = level.createEntity('artifacts:mimic')
        mimic.setPosition(block.x + 0.5, block.y + 1.1, block.z + 0.5)
        mimic.spawn()
        player.swing()
        event.cancel()
    }
})
//🜔