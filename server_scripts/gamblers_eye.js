ItemEvents.rightClicked('kubejs:gamblers_eye', event => {
    let result = Math.floor(Math.random() * 13) + 1
    const player = event.player 
    const item = event.item
    console.log(result)
    //
    if (!player.creative) {
        item.shrink(1)
    }
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
        player.give(Item.of('minecraft:tnt'))
    }
    if(result == 13){
        player.give(Item.of('minecraft:ender_eye'))
    }
})
