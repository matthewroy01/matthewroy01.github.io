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
    this.cameras.main.setBackgroundColor('#dddddd');

    game.refFlockManager = new FlockManager(this);
    game.refFlockManager.SpawnInitialBoids();

    // add some text
    this.add.text(0, 0, 'Simple Boids simulation in Phaser 3 made by Matthew Roy.', { color: 'blue' });
    this.add.text(0, 20, 'Click here to return to my portfolio.', { color: 'purple' });

    this.add.text(0, 60, '+ Add Boid', { color: 'red' });
    this.add.text(0, 80, '- Remove Boid', {color: 'red' });

    game.counterText = this.add.text(0, 100, 'There are 20 Boids', {color: 'gray' });

    // create a button
    game.button = this.add.rectangle(355 * 0.5, 27, 355, 20, 0x000000);
    CreateButtonInput(game.button, ReturnButton);

    game.add = this.add.rectangle(100 * 0.5, 67, 100, 20, 0x000000);
    CreateButtonInput(game.add, AddButton);

    game.remove = this.add.rectangle(130 * 0.5, 87, 130, 20, 0x000000);
    CreateButtonInput(game.remove, RemoveButton);
}

function update ()
{
    game.refFlockManager._PhysicsProcess();
}

CreateButtonInput = function(button, callback)
{
    button.setAlpha(0.001);
    button.setInteractive();

    // set up button input
    button.on('pointerover', function()
    {
        button.setAlpha(0.2);
    });

    button.on('pointerout', function()
    {
        button.setAlpha(0.001);
    });

    button.on('pointerdown', function()
    {
        button.setAlpha(0.5);
    });

    button.on('pointerup', function()
    {
        button.setAlpha(0.2);
        callback();
    });
};

ReturnButton = function()
{
    window.location.href = 'https://matthewroy01.github.io/';
};

AddButton = function()
{
    game.refFlockManager.AddBoid();

    // update counter text
    game.counterText.text = 'There are ' + game.refFlockManager.GetBoids().list.length + " Boids";
};

RemoveButton = function()
{
    game.refFlockManager.RemoveBoid();

    // update counter text
    tmp = game.refFlockManager.GetBoids().list.length;

    if (tmp === 1)
    {
        game.counterText.text = 'There is ' + game.refFlockManager.GetBoids().list.length + " Boid :(";
    }
    else
    {
        game.counterText.text = 'There are ' + game.refFlockManager.GetBoids().list.length + " Boids";
    }
};

GetRandBetweenNegativeOneAndOne = function()
{
    num = Math.random();

    num *= 2;
    num -= 1;

    return num;
};