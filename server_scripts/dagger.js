ItemEvents.rightClicked('kubejs:dagger', event => {
    const { item, player, hand, server, level } = event
    const reach = 4.5
    const result = player.rayTrace(reach, true)
    const pattern = [
      "aabbbaa",
      "abcccba",
      "bcadacb",
      "bcdedcb",
      "bcadacb",
      "abcccba",
      "aabbbaa"
    ]
    const keys = {
    b: 'minecraft:yellow_concrete',
    c: 'minecraft:lime_concrete',
    d: 'minecraft:blue_concrete',
    e: 'minecraft:purple_concrete'
    }
    //a
        function matchesPattern(level, center) {
      let startX = center.x - 3
      let startZ = center.z - 3
      let y = center.y

      for (let dz = 0; dz < pattern.length; dz++) {
        let row = pattern[dz]

        for (let dx = 0; dx < row.length; dx++) {
          let char = row[dx]

          if (char == 'a') continue

          let expected = keys[char]
          let block = level.getBlock(startX + dx, y, startZ + dz).id

          if (block != expected) {
            return false
          }
        }
      }

      return true
    }
        if (result && result.block) {
      if (matchesPattern(level, result.block)) {
        console.log("testdone")
      }
    }
    //b 
    if (hand != 'MAIN_HAND') return

    if (!player.creative) {
        player.attack(5.0)
        
        item.damageValue += 2
        
        if (item.damageValue >= item.maxDamage) {
            item.count--
            server.runCommandSilent(`/playsound minecraft:entity.item.break block @p ${player.x} ${player.y} ${player.z} 1 1`)
        }
    }
    console.log(result.block.x+1)
    if(result.block == 'minecraft:red_concrete'){   //red concrete is to be replaced with spell funnel
        if(level.getBlock(result.block.x + 1, result.block.y, result.block.z).id == 'minecraft:yellow_concrete' && level.getBlock(result.block.x - 1, result.block.y, result.block.z).id == 'minecraft:yellow_concrete' && level.getBlock(result.block.x, result.block.y, result.block.z + 1).id == 'minecraft:yellow_concrete' && level.getBlock(result.block.x, result.block.y, result.block.z - 1).id == 'minecraft:yellow_concrete' ){
            console.log("testdone")
        }
    }
})
