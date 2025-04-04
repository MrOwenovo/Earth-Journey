// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

// ItemEvents.rightClicked('item', e => {
// 	if (e.player 
// 	&& e.player.getHeldItem(e.hand) == 'kubejs:qtww')
// 		   {
// 		   e.player.mainHandItem.count-=1
// 		   e.server.runCommandSilent(`weather clear`)
//         e.server.runCommandSilent(`title @a title [\"\",{\"text\":\"(#^.^#)晴天啦~\",\"color\":\"aqua\"}]`)
// 		   }            
// })

ItemEvents.foodEaten('item', event => {
	if (event.item == 'kubejs:qttg' )
		   {
			event.server.runCommandSilent(`effect give @a minecraft:levitation 3 0`)
 		    event.server.runCommandSilent(`weather clear`)
            event.server.runCommandSilent(`title @a title [\"\",{\"text\":\"(#^.^#)晴天啦~\",\"color\":\"aqua\"}]`)
		   }            
})

ItemEvents.foodEaten('item', event => {
	if (event.item == 'kubejs:xsp' )
		   {
			event.server.runCommandSilent(`effect give @a minecraft:hunger 30 4`)
		   }            
})


ServerEvents.recipes(event => {
	event.remove({id: 'constructionwand:core_destruction'})
	event.remove({id: 'swem:toy_lick_salt'})	
	event.remove({id: 'alexsmobs:sopa_de_macaco'})	
	event.remove({id: 'untameddelight:golden_arowana'})	
	event.remove({id: 'untameddelight:spicy_catfish'})	
	event.remove({id: 'untameddelight:baked_trevally_with_cheese'})
	event.remove({id: 'brewery:dumplings'})
	event.remove({id: 'brewery:dumplings_from_smoking'})
	event.remove({id: 'brewery:dumplings_from_campfire_cooking'})
	event.remove({id: 'untameddelight:glazed_spadefish'})
	event.remove({id: 'brewery:fried_chicken'})
	event.remove({id: 'brewery:fried_chicken_from_campfire_cooking'})
	event.remove({id: 'brewery:fried_chicken_from_smoking'})
	event.remove({id: 'brewery:pork_knuckle'})
	event.remove({id: 'brewery:pork_knuckle_from_campfire_cooking'})
	event.remove({id: 'brewery:pork_knuckle_from_smoking'})
	event.remove({id: 'farmersdelight:cooking/cabbage_rolls'})
	event.remove({id: 'youkaishomecoming:avgolemono'})
	event.remove({id: 'farmersdelight:sweet_berry_cheesecake'})
	event.remove({id: 'brewery:sausage'})
	event.remove({id: 'brewery:sausage_from_campfire_cooking'})
	event.remove({id: 'brewery:sausage_from_smoking'})
	event.remove({id: 'alexsmobs:mosquito_repellent_stew'})
	event.remove({id: 'bountiful:crafting/decree'})
	event.remove({id: 'swem:slimeball'})
	event.remove({id: 'vintagedelight:fermenting/slime_block_from_fermenting'})	
	event.remove({id: 'untameddelight:smoked_catfish_from_smoking'})	
})

ServerEvents.blockLootTables(event => {
	event.addBlock('minecraft:campfire', table => {
	  table.addPool(pool => {
		pool.rolls = {min: 1, max: 1}
		pool.addItem('minecraft:campfire', 1, 1)
  })
  })
  })
	
ServerEvents.blockLootTables(event => {
	event.addBlock('minecraft:soul_campfire', table => {
	  table.addPool(pool => {
		pool.rolls = {min: 1, max: 1}
		pool.addItem('minecraft:soul_campfire', 1, 1)
  })
  })
  })
	
ServerEvents.blockLootTables(event => {
	event.addBlock('minecraft:melon', table => {
	  table.addPool(pool => {
		pool.rolls = {min: 1, max: 1}
		pool.addItem('minecraft:melon', 1, 1)
  })
  })
  })

ServerEvents.recipes(event => {
  event.custom({
	type: 'farmersdelight:cutting',
	ingredients: [
	  { item: 'biomesoplenty:sea_oats' }
	],
	tool: { item: 'bakery:rolling_pin' },
	result: [
	  { item: 'vintagedelight:salt_dust', count: 1 },
	  { item: 'vintagedelight:raw_oats', count: 1 }
	]
  })
})

ServerEvents.recipes(event => {
    event.shapeless('1x swem:toy_lick_salt', ['1x vintagedelight:salt_block','1x minecraft:diorite'])
	event.shapeless('1x swem:toy_lick_salt', ['1x biomesoplenty:dried_salt'])
    event.shapeless('1x farmersdelight:cabbage_rolls', ['1x farmersdelight:cooked_chicken_cuts','2x farmersdelight:cabbage_leaf'])
    })

ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"tag": "forge:bones"
		  },
		  {
			"item": "alexsmobs:banana_peel"
		  },
		  {
			"tag": "forge:mushrooms"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "alexsmobs:sopa_de_macaco"
		}
	})
  })
  
  ServerEvents.recipes(event => {
	event.shaped('1x farmersdelight:sweet_berry_cheesecake', [
	  'SSS',
	  'SSS',
	  'CPC'
], {
  P: 'farmersdelight:pie_crust',
  S: 'minecraft:sweet_berries',
  C: 'casualness_delight:cheese_wheel_slice'
})
})

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "minecraft:gold_ingot"
		  },
		  {
			"tag": "forge:crops/cabbage"
		  },
		  {
			"item": "farmersdelight:tomato"
		  },
		  {
			"item": "untameddelight:arowana"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "untameddelight:golden_arowana"
		}
	})
  })
  

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "vintagedelight:ghost_pepper"
		  },
		  {
			"tag": "forge:crops/cabbage"
		  },
		  {
			"item": "farmersdelight:tomato"
		  },
		  [
			{
			  "item": "untameddelight:catfish"
			},
			{
			  "item": "naturalist:catfish"
			},
			{
			  "item": "alexsmobs:raw_catfish"
			}
		  ]
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "untameddelight:spicy_catfish"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 300,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "casualness_delight:cheese_wheel_slice"
		  },
		  {
			"item": "casualness_delight:cheese_wheel_slice"
		  },
		  {
			"item": "casualness_delight:cheese_wheel_slice"
		  },
		  {
			"item": "untameddelight:trevally"
		  },
		  {
			"item": "farmersdelight:onion"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "untameddelight:baked_trevally_with_cheese"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 300,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "minecraft:potato"
		  },
		  {
			"item": "farmersdelight:milk_bottle"
		  },
		  {
			"item": "minecraft:egg"
		  },
		  {
			"item": "minecraft:potato"
		  },
		  {
			"item": "minecraft:potato"
		  },
		  {
			"item": "vintagedelight:salt_dust"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "brewery:mashed_potatoes"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 300,
		"experience": 1.0,
		"ingredients": [
		  {
			"tag": "forge:dough"
		  },
		  {
			"item": "minecraft:potato"
		  },
		  {
			"tag": "forge:crops/onion"
		  },
		  [
			{
			  "tag": "forge:raw_chicken"
			},
			{
			  "tag": "forge:raw_pork"
			},
			{
			  "tag": "forge:raw_beef"
			},
			{
			  "item": "minecraft:brown_mushroom"
			}
		  ]
		],
		"recipe_book_tab": "meals",
		"result": {
			"count": 2,
		  "item": "brewery:dumplings"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 300,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "minecraft:carrot"
		  },
		  {
			"item": "untameddelight:cooked_spadefish"
		  },
		  {
			"tag": "forge:crops/cabbage"
		  },
		  {
			"item": "farmersdelight:rice"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "untameddelight:glazed_spadefish"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "minecraft:chicken"
		  },
		  {
			"item": "vintagedelight:salt_dust"
		  },
		  {
			"item": "minecraft:apple"
		  },
		  {
			"tag": "forge:eggs"
		  },
		  {
			"item": "farmersdelight:onion"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "brewery:half_chicken"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "farmersdelight:chicken_cuts"
		  },
		  {
			"item": "minecraft:potato"
		  },
		  {
			"tag": "forge:eggs"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "brewery:fried_chicken"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "farmersdelight:ham"
		  },
		  {
			"item": "youkaishomecoming:soy_sauce_bottle"
		  },
		  {
			"tag": "forge:eggs"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "brewery:pork_knuckle"
		}
	})
  })

  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "vintagedelight:salt_dust"
		  },
		  {
			"item": "pamhc2trees:lemonitem"
		  },
		  {
			"item": "pamhc2trees:lemonitem"
		  },
		  {
			"tag": "forge:eggs"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "youkaishomecoming:avgolemono"
		}
	})
  })


  ServerEvents.blockLootTables(event => {
    event.addBlock('kubejs:sjk', table => {
      table.addPool(pool => {
        pool.rolls = {min: 1, max: 1}
        pool.addItem('minecraft:coal', 8, [2,6])
        pool.addItem('minecraft:raw_copper', 7, [1,2])
        pool.addItem('minecraft:raw_iron', 6, [1,2])
        pool.addItem('minecraft:lapis_lazuli', 5, [1,8])
        pool.addItem('minecraft:redstone', 5, [1,8])
		pool.addItem('minecraft:diamond', 4, [1,5])
        pool.addItem('minecraft:emerald', 3, 1)
})
})
})


ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "vintagedelight:salt_dust"
		  },
		  {
			"item": "minecraft:porkchop"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "brewery:sausage"
		}
	})
  })


  ServerEvents.recipes(event => {
	event.custom({
		"type": "farmersdelight:cooking",
		"container": {
			"item": "minecraft:bowl"
		  },
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
		  {
			"item": "vintagedelight:salt_dust"
		  },
		  {
			"item": "alexsmobs:triops_eggs"
		  },
		  {
			"item": "alexsmobs:triops_eggs"
		  },
		  {
			"item": "alexsmobs:stink_bottle"
		  }
		],
		"recipe_book_tab": "meals",
		"result": {
		  "item": "alexsmobs:mosquito_repellent_stew"
		}
	})
  })

