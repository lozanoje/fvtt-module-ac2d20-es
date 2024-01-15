Hooks.once('init', () => {
  document.getElementById("logo").src = "/modules/fvtt-module-ac2d20-es/images/fvtt-ac2d20-es.webp";
});

Hooks.once('ready', () => {
  if (game.user.isGM) {
    // console.log(game.settings.get("ac2d20", "compendium-skills"));
    game.settings.set("ac2d20", "compendium-skills", 'fvtt-module-ac2d20-es.habilidades-es');
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
