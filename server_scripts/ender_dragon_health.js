EntityEvents.spawned(event => {
  const entity = event.entity
  const Dhealth = 1000

  if (entity.type == "minecraft:ender_dragon") {
    console.log("ENDERDRAGON SPAWNED")

    const maxHealthAttr = entity.getAttribute("minecraft:generic.max_health")

    if (maxHealthAttr) {
      maxHealthAttr.baseValue = Dhealth

      entity.health = Dhealth
    }
   }
 })
