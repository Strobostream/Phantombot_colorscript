(function() {
	var colors = ['rouge', 'orange', 'jaune', 'vert', 'cyan', 'bleu', 'violet', 'rose'];
	
	
	$.bind('command', function(event) {
		var command = event.getCommand(),
			sender = event.getSender(),
			args = event.getArgs();
			
			if (command.equalsIgnoreCase('couleur')) {
				//if (args.length == 1 && colors.includes(args[0]))
				if (args.length == 1 && colors.indexOf(arg[0]) == 0)
					{
						$.say(sender + ' a changé la couleur en ' + args[0]);
						return;
					}
				else 
					{
						$.say($.whisperPrefix(sender) + 'Usage: !couleur + une des couleurs suivantes :  rouge, orange, jaune, vert, cyan, bleu, violet, rose.');
						$.returnCommandCost(sender, command, isMod);
					}

				}
			});
	
	$.bind('initReady', function() {
        $.registerChatCommand('./custom/color.js', 'couleur', 7);
    });
}) ();


isInTable function(item,table)
{
	var isIncluded = false;
	for (i=0 ; i<table.length ; i++)
	{
		if (item == table[i])
		{
			isIncluded = true;
			break;
		}
	}
};
if doesInclude { givePoints }
