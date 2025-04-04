// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')


StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('qttg').displayName('晴天糖果')
    e.create('xsp').displayName('消食片')
})


StartupEvents.registry('block', e => {
	// Register new blocks here
    e.create('sjk').material('rock').hardness(1.0).displayName('随机矿')
})


StartupEvents.registry('item', e => {
    e.create('iii').displayName('悬赏积分').maxStackSize(10000)
})


ItemEvents.modification(event => {
    event.modify('kubejs:qttg', item => {
      item.foodProperties = food => {
          food.hunger(1)
          food.alwaysEdible()
          food.saturation(0)
      }
    })
})


ItemEvents.modification(event => {
    event.modify('kubejs:xsp', item => {
      item.foodProperties = food => {
          food.hunger(1)
          food.alwaysEdible()
          food.saturation(0)
      }
    })
})
