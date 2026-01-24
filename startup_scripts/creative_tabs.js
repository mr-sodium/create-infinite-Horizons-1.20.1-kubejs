StartupEvents.modifyCreativeTab('kubejs:tab', event => {
	event.displayName = ('Creating: Infinite Horizons')
	event.remove('kubejs:mimic_spawn_egg')
	event.remove('kubejs:damaged_magic_mirror')
	event.remove('kubejs:cracked_magic_mirror')
})

StartupEvents.modifyCreativeTab('artifacts:main', event => {
	event.add('kubejs:mimic_spawn_egg')
	event.remove('artifacts:mimic_spawn_egg')
})
