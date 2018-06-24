(function() {
    $.bind('command', function(event) 
    {
        var command = event.getCommand(),
        sender = event.getSender.toLowerCase(),
        args = event.getArgs(),
        pointcost = 200,
        color = ['rouge', 'orange', 'jaune', 'vert', 'cyan', 'bleu', 'violet', 'rose'];
        
            if (args.getLengh(args)==1 && color.includes(args)) 
            {
                $.say($.whisperPrefix(sender) + 'a modifié la couleur de fond en : ' + args);
                $.inidb.decr('points', sender, pointcost);
            }
            else    
            {
                $.say('Utilisation : !couleur [couleur parmi celles-ci : rouge, orange, jaune, vert, cyan, blue, violet, rose]');
                
            }
    }
    );
    
    
    $.bind('initReady', function() 
    {
        if (isModuleEnabled('./systems/pointSystem.js')) 
        {
            $.registerChatCommand('./custom/color.js', 'couleur',7);
        }
    });
});


/**
function returnCommandCost(sender, command, isMod) {
        sender = sender.toLowerCase();
        command = command.toLowerCase();

        if ($.inidb.exists('pricecom', command) && parseInt($.inidb.get('pricecom', command)) > 0) {
            if ((((isMod && $.getIniDbBoolean('settings', 'pricecomMods', false) && !$.isBot(sender)) || !isMod))) {
                $.inidb.incr('points', sender, $.inidb.get('pricecom', command));
            }
        }
}


 $.returnCommandCost = returnCommandCost;
 $.payCom = payCom;
 $.inidb.incr(String table_name, String key, int amount)
 $.inidb.decr(String table_name, String key, int amount)
  */
