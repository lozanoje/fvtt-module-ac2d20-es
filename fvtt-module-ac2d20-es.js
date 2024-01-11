Hooks.once('init', () => {
  document.getElementById("logo").src = "/modules/fvtt-module-ac2d20-es/images/fvtt-ac2d20-es.webp";
});

Hooks.once('ready', () => {
  if (game.user.isGM) {
     console.log(game.settings.get("ac2d20", "compendium-skills"));
      game.settings.set("ac2d20", "compendium-skills", 'fvtt-module-ac2d20-es.habilidades-es');
  }
});