
const BASE_DRAGON_HEALTH = 500
const maxplayercount = 10
EntityEvents.spawned(event => {
  const entity = event.entity

  if (entity.type == "minecraft:ender_dragon") {

    const maxHealthAttr = entity.getAttribute("minecraft:generic.max_health")

    if (maxHealthAttr) {
      const playerCount = Math.max(1, event.server.players.size())

      let newHealth

      if (playerCount > maxplayercount) {
        newHealth = BASE_DRAGON_HEALTH * maxplayercount
      } else {
        newHealth = BASE_DRAGON_HEALTH * playerCount
      }

      maxHealthAttr.baseValue = newHealth
      entity.health = newHealth
    }
  }
})