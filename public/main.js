var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update:update});

function preload(){

    game.load.image('einstein', '/img/ra_einstein.png');
    game.load.image('lc', '/img/ladycop.png');
    game.load.image('mg', '/img/manga-girl.png');
    game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');
}

var einstein;
var mg;
var lc;
var bot;

function create(){

    var text = "- phaser -\n with a sprinkle of \n pixi dust.";
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);


      einstein = game.add.sprite(0, 0, 'einstein');
      lc = game.add.sprite(100, 100, 'lc');
      mg = game.add.sprite(200, 500, 'mg');
      bot = game.add.sprite(600, 200, 'bot');

    einstein.scale.setTo(0.1);
    mg.scale.setTo(0.1);

    game.physics.enable(einstein, Phaser.Physics.ARCADE);
    game.physics.enable(lc, Phaser.Physics.ARCADE);

    //lc.body.velocity.y=-10;
    einstein.body.velocity.x=150;
    game.physics.arcade.enable(mg, Phaser.Physics.ARCADE);

    var tween = game.add.tween(lc);
    tween.to({ x: 600 }, 6000);
    tween.start();

    var tweenBot = game.add.tween(bot);
tweenBot.to({x:10}, 6000);
tweenBot.start();

    bot.animations.add('run');
    bot.animations.play('run', 30, true);



}

function update () {


    if (game.physics.arcade.distanceToPointer(mg, game.input.activePointer) > 8)
    {
        game.physics.arcade.moveToPointer(mg, 300);
    }
    else  {
        mg.body.velocity.set(0);
    }

}
