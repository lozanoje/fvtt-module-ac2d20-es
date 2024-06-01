Hooks.once('init', () => {
  document.getElementById("logo").src = "/modules/fvtt-module-ac2d20-es/images/fvtt-ac2d20-es.webp";
});

Hooks.once('ready', () => {
  if (game.user.isGM) {
    // console.log(game.settings.get("ac2d20", "hoversJsonLocation"));
    // game.settings.set("ac2d20", "hoversJsonLocation", 'modules/fvtt-module-ac2d20-es/assets/hovers-es.json');
    // console.log(game.settings.get("ac2d20", "compendium-skills"));
    // game.settings.set("ac2d20", "compendium-skills", 'fvtt-module-ac2d20-es.habilidades');
    // console.log(game.settings.get("ac2d20", "compendium-skills"));
    // game.settings.set("ac2d20", "resilience-skill", 'Fortaleza');	
	// fonts
/*     game.settings.set("core", "fonts", {
      "AC Cthulu Icons": {
        "editor": true,
        "fonts": [{
            "urls": [
              "systems/ac2d20/assets/fonts/AC-Cthulhu-Icons.woff"
            ],
            "weight": 400,
            "style": "normal"
          }
        ]
      },
      "Cthulu Icons": {
        "editor": true,
        "fonts": [{
            "urls": [
              "systems/ac2d20/assets/fonts/cthulhu-icons.woff"
            ],
            "weight": 400,
            "style": "normal"
          }
        ]
      }
    }) */
  }
});
