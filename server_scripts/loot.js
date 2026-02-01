LootJS.modifiers((event) => {
    //this need you to have loot.js DO NOT DELETE
    event.addBlockLootModifier("kubejs:cracked_diamond_block").removeLoot("kubejs:cracked_diamond_block").addLoot("minecraft:diamond_block")
    event.addBlockLootModifier("kubejs:budding_durrite").removeLoot("kubejs:budding_durrite").addLoot("dungeonnowloading:durite")

});
