// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ItemEvents.tooltip(event => {
	event.add('constructionwand:core_destruction', [Text.of('禁用物品无法合成').red()])
}) 


ItemEvents.tooltip(event => {
	event.add('brewery:barrel_main', [Text.of('仅装饰作用').yellow()])
	event.add('swem:western_barrel', [Text.of('仅装饰作用').yellow()])
	event.add('swem:western_pole', [Text.of('仅装饰作用').yellow()])
	event.add('swem:fence_tool', [Text.of('右键改变模组围栏形状').yellow()])
	event.add('swem:fence_tool', [Text.of('英式围栏可按shift+右键来改变方向').yellow()])
	event.add('swem:vet_check_bag', [Text.of('右键查看马匹健康状态').yellow()])
	event.add('swem:brush', [Text.of('刷子是用来提高与马的亲和力的物品').yellow()])
	event.add('swem:brush', [Text.of('每个游戏日建议最多刷 7 次').yellow()])
	event.add('swem:brush', [Text.of('刷毛后的粒子显示，由好到坏：紫＞绿＞灰＞红').yellow()])
	event.add('swem:spray_fly', [Text.of('右键马匹使其获得生命恢复15秒').yellow()])
	event.add('swem:glistening_melon', [Text.of('右键马匹可恢复5颗心的血量，如果没有受伤则无效').yellow()])
	event.add('selectable_painting:selectable_painting', [Text.of('对着空气右键可进入选择界面').yellow()])
	event.add('habitat:blowball', [Text.of('试试长按右键').yellow()])
	event.add('alexsmobsinteraction:swatter', [Text.of('右键让蚊子苍蝇停下，相当于眩晕了它们').yellow()])
	event.add('naturescompass:naturescompass', [Text.of('已知问题：无法点击想要搜索的群系，一闪一闪的').red()])
	event.add('naturescompass:naturescompass', [Text.of('解决办法：先点一下左边的开始搜索，再点需要搜索的群系即可').yellow()])
	event.add('betterarcheology:bomb', [Text.of('能够破坏地形').yellow()])
	event.add('kubejs:ii', [Text.of('下版本将删除，请在任务兑换为x1单位的悬赏积分').red()])
	event.add('kubejs:i', [Text.of('下版本将删除，请在任务兑换为x1单位的悬赏积分').red()])
	event.add('kubejs:1q', [Text.of('下版本将删除，请在任务兑换为x1单位的悬赏积分').red()])
	event.add('kubejs:1w', [Text.of('下版本将删除，请在任务兑换为x1单位的悬赏积分').red()])
	event.add('kubejs:10w', [Text.of('下版本将删除，请在任务兑换为x1单位的悬赏积分').red()])
	event.add('kubejs:100w', [Text.of('下版本将删除，请在任务兑换为x1单位的悬赏积分').red()])
}) 

