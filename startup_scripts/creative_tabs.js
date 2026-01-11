StartupEvents.modifyCreativeTab('kubejs:tab', event => {
	event.displayName = ('Creating: Infinite Horizons')
})

StartupEvents.modifyCreativeTab('artifacts:main', event => {
	event.add('kubejs:mimic_spawn_egg')
	event.remove('artifacts:mimic_spawn_egg')
})