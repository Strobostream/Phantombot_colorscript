$.bind('couleur', function(event) 
{
    var command = event.getCommand(),
    sender = event.getSender();
    args = event.getArgs(),
    color = ['rouge', 'orange', 'jaune', 'vert', 'cyan', 'bleu', 'violet', 'rose'];
    
    if (args.getLengh(args)==1 && color.includes(args))     {
        $.say($.whisperPrefix(sender) + 'a modifié la couleur de fond en : ' + args);
    }
    else     {
    $.say('Utilisation : !couleur [couleur parmi celles-ci : rouge, orange, jaune, vert, cyan, blue, violet, rose]');
    }
});

$.bind('initReady', function() {
    if (isModuleEnabled('./systems/pointSystem.js')) {
            $.registerChatCommand('./custom/color.js', 'couleur')};
});
