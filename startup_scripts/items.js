//potato
StartupEvents.registry('item', event => {
    event.create('blazing_upgrade_template').displayName('Blazing Upgrade Template')
    event.create('gilded_upgrade_template').displayName('Guilded Upgrade Template')
    event.create('rose_quartz_dust').displayName('Rose Quartz Dust')
    event.create('carbon_dust').displayName('Carbon Dust')
    event.create('brass_pipe').displayName('Brass Pipe')
    event.create('obsidian_bucket').displayName('Obsidian Bucket').maxStackSize(16)
    event.create('obsidian_lava_bucket').displayName('Obsidian Lava Bucket').maxStackSize(1)
    event.create('obsidian_water_bucket').displayName('Obsidian Water Bucket').maxStackSize(1)
  
})
