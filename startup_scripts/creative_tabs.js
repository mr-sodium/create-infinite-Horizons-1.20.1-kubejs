StartupEvents.modifyCreativeTab('kubejs:tab', event => {
	event.displayName = ('Creating: Infinite Horizons')
	event.remove('kubejs:mimic_spawn_egg')
})

StartupEvents.modifyCreativeTab('artifacts:main', event => {
	event.add('kubejs:mimic_spawn_egg')
	event.remove('artifacts:mimic_spawn_egg')
})

StartupEvents.modifyCreativeTab('endrem:endrem_tab', event => {
	event.add('kubejs:gamblers_eye')
})