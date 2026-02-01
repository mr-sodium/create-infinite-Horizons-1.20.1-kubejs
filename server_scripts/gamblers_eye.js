ItemEvents.rightClicked('kubejs:gamblers_eye', event => {
    let result = Math.floor(Math.random() * 14) + 1
    let r2 = Math.floor(Math.random() * 2) + 1
    const player = event.player 
    const item = event.item
    const cooldowntime = 12

    event.server.runCommand(`/playsound minecraft:block.note_block.chime block @p ${player.x} ${player.y} ${player.z} 1.2 1.4`)
    event.server.runCommand(`/playsound minecraft:block.anvil.destroy block @p ${player.x} ${player.y} ${player.z} 0.3 2`)
    
    if (!player.creative) {
        item.shrink(1)
    }
    player.addItemCooldown("kubejs:gamblers_eye", cooldowntime)
    if(result == 1){
        player.give(Item.of('endrem:exotic_eye'))
    }
    if(result == 2){
        player.give(Item.of('endrem:cryptic_eye'))
    }
    if(result == 3){
        player.give(Item.of('endrem:guardian_eye'))
    }
    if(result == 4){
        player.give(Item.of('endrem:wither_eye'))
    }
    if(result == 5){
        player.give(Item.of('endrem:evil_eye'))
    }
    if(result == 6){
        player.give(Item.of('endrem:corrupted_eye'))
    }
    if(result == 9){
        player.give(Item.of('endrem:old_eye'))
    }
    if(result == 8){
        player.give(Item.of('endrem:witch_eye'))
    }
    if(result == 7){
        player.give(Item.of('endrem:magical_eye'))
    }
    if(result == 10){
        player.give(Item.of('endrem:nether_eye'))
    }
    if(result == 11){
        player.give(Item.of('endrem:undead_eye'))
    }
    if(result == 12){
        player.give(Item.of('endrem:cold_eye'))
    }
    if(result == 13){
        player.give(Item.of('minecraft:ender_eye'))
    }
    if(result == 14){
        if(r2 == 1){
            player.give(Item.of('minecraft:ender_eye'))
        }else{
            event.server.runCommand(`/summon minecraft:tnt ${player.x} ${player.y} ${player.z} {Fuse:240s}`)
        }
    }
});