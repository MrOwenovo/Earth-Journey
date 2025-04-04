
PlayerEvents.loggedIn(event => {
    const player = event.player; 
    if (!player.data.sticky_piston_hasReceivedWelcome) {
        event.server.scheduleInTicks(100, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"欢迎游玩自然之旅3","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(200, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"主世界怪物的生成高度被设置为低于64才会生成","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(300, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"但一些掠夺者还是会正常生成在据点","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(400, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"除此之外，下界和末地维度是正常刷怪的","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(600, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"血量可以通过吃不同的食物来增加","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(700, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"每吃五种不同的食物就会增加一颗❤","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(800, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"请注意，在刚开始和探索新地形时会有些卡顿，因为地平线正在大量加载周围区块，过一会就会恢复正常！","color":"green"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(900, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"希望你在这里玩得开心","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        event.server.scheduleInTicks(1000, () => { 
            const messageCommand = `/tellraw ${player.name.string} [{"text":"系统：","color":"red"},{"text":"如果有任何问题，记得先看任务指南喔！","color":"white"}]`;
            event.server.runCommand(messageCommand);
        });

        player.data.sticky_piston_hasReceivedWelcome = true;
    }
});
