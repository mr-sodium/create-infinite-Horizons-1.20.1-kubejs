LootJS.modifiers((event) => {
    //For this you need to have loot.js DO NOT DELETE
    event.addBlockLootModifier("kubejs:cracked_diamond_block").removeLoot("kubejs:cracked_diamond_block").addLoot("minecraft:diamond_block")
    event.addBlockLootModifier("kubejs:budding_durite").removeLoot("kubejs:budding_durite").addLoot("dungeonnowloading:durite")
})
