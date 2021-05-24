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
    this.load.image('triangle', '../triangle.png');

    this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
    this.load.image('logo', 'http://labs.phaser.io/assets/sprites/phaser3-logo.png');
    this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
}

function create ()
{
    this.cameras.main.setBackgroundColor('#ffffff');

    game.refFlockManager = new FlockManager(this);
    game.refFlockManager.SpawnInitialBoids();

    //this.add.image(400, 300, 'sky');

    //var logo = this.physics.add.image(400, 100, 'triangle');

    //logo.setVelocity(100, 200);
    //logo.setBounce(1, 1);
    //logo.setCollideWorldBounds(true);
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