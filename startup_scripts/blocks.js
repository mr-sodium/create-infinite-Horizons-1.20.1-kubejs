StartupEvents.registry('block', event => {
  event.create('charcoal_block').displayName('Block of Charcoal').soundType('stone').hardness(5).resistance(6).tagBlock('minecraft:mineable/pickaxe')
  event.create('budding_durrite').displayName('budding durrite').soundType('amethyst').tagBlock('minecraft:mineable/pickaxe').randomTick()
  event.create('cracked_diamond_block').displayName('cracked diamond block').soundType('stone').tagBlock('minecraft:mineable/pickaxe').hardness(5).resistance(6)
  event.create('cracked_diamond_block_l1').displayName('cracked diamond block').soundType('stone').tagBlock('minecraft:mineable/pickaxe').hardness(5).resistance(6)
})