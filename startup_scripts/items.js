//potato
StartupEvents.registry('item', event => {
    event.create('blazing_upgrade_template').displayName('Blazing upgrade template')
    event.create('gilded_upgrade_template').displayName('Guilded upgrade template')
    event.create('rose_quartz_dust').displayName('Rose quartz dust')
    event.create('carbon_dust').displayName('Carbon dust')
    event.create('brass_pipe').displayName('Brass pipe')
    event.create('obsidian_bucket').displayName('Obsidian bucket').maxStackSize(16)
    event.create('obsidian_lava_bucket').displayName('Obsidian lava bucket').maxStackSize(1)
})
