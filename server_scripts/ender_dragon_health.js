// KubeJS server script to set Ender Dragon max health to 1000

EntityEvents.spawned(event => {
  const entity = event.entity
  const Dhealth = 1000

  // Check if the spawned entity is the Ender Dragon
  if (entity.type == "minecraft:ender_dragon") {
    console.log("ENDERDRAGON SPAWNED")

    // Get the generic max health attribute
    const maxHealthAttr = entity.getAttribute("minecraft:generic.max_health")

    if (maxHealthAttr) {
      maxHealthAttr.baseValue = Dhealth

      // Also heal the dragon to full after changing health
      entity.health = Dhealth
    }
   }
 })
