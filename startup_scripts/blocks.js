StartupEvents.registry('block', event => {
  event.create('charcoal_block').displayName('Block of Charcoal').soundType('stone').hardness(5).resistance(6).tagBlock('minecraft:mineable/pickaxe')
  event.create('ender_polonium_ore').displayName('Ender Polonium Ore').soundType('stone').hardness(2).resistance(1).tagBlock('minecraft:mineable/pickaxe')
  event.create('ender_polonium_block').displayName('Block Of Ender Polonium').soundType('stone').hardness(2).resistance(1).tagBlock('minecraft:needs_diamond_tool')
})