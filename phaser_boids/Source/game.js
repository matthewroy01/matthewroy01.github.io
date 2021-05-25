var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    scale: {
      mode: Phaser.Scale.FIT,
    },
    loaderCrossOrigin: "anonymous"
};

var game = new Phaser.Game(config);

// "aliases" for class paths like the "using" keyword in C#
var Vector2 = Phaser.Math.Vector2;

function preload ()
{
    this.load.image('triangle', 'https://matthewroy01.github.io/phaser_boids/triangle.png');
}

function create ()
{
    this.cameras.main.setBackgroundColor('#ffffff');

    game.refFlockManager = new FlockManager(this);
    game.refFlockManager.SpawnInitialBoids();

    // add some text
    this.add.text(0, 0, 'Simple Boids simulation in Phaser 3 made by Matthew Roy.', { color: 'blue' });
    this.add.text(0, 20, 'Click here to return to my portfolio.', { color: 'purple' });

    // create a button
    game.button = this.add.rectangle(355 * 0.5, 27, 355, 20, 0x000000);
    game.button.setAlpha(0.001);
    game.button.setInteractive();

    // set up button input
    game.button.on('pointerover', function()
    {
        game.button.setAlpha(0.2);
    });

    game.button.on('pointerout', function()
    {
        game.button.setAlpha(0.001);
    });

    game.button.on('pointerdown', function()
    {
        game.button.setAlpha(0.5);
    });

    game.button.on('pointerup', function()
    {
        console.log("Returning to portfolio...");
        window.location.href = 'https://matthewroy01.github.io/';
    });
}

function update ()
{
    game.refFlockManager._PhysicsProcess();
}

GetRandBetweenNegativeOneAndOne = function()
{
    num = Math.random();

    num *= 2;
    num -= 1;

    return num;
};