var FlockManager = new Phaser.Class({
    Extends: Phaser.GameObjects.Container,

    initialize: function FlockManager(scene)
    {
        this.scene = scene;

        this.NUM_OF_BOIDS = 20;

        this.DISTANCE_ALIGN = 50;
        this.DISTANCE_SEPARATION = 50;
        this.DISTANCE_COHESION = 50;
    }
});

FlockManager.prototype.SpawnInitialBoids = function()
{
    if (this.boids === undefined)
    {
        this.boids = new Phaser.Structs.List();
    }

    // spawn the initial number of boids
    for (i = 0; i < this.NUM_OF_BOIDS; ++i)
    {
        tmp = new Boid(this.scene);

        // initialize the boid itself
        tmp.Initialize(this);

        this.boids.add(tmp);
    }
};

FlockManager.prototype._PhysicsProcess = function()
{
    if (this.boids !== undefined && this.boids.length > 0)
    {
        console.log(this.boids.list.length);
        this.boids.list.forEach(element => element._PhysicsProcess());
    }
};

FlockManager.prototype.GetBoids = function()
{
    return this.boids;
};

FlockManager.prototype.AddBoid = function()
{
    if (this.boids.length < 50)
    {
        // create and initialze a new Boid
        tmp = new Boid(this.scene);
        tmp.Initialize(this);

        // move it to the center of the screen
        tmp.sprite.x = 400;
        tmp.sprite.y = 300;

        // add it to the list
        this.boids.add(tmp);
    }
};

FlockManager.prototype.RemoveBoid = function()
{
    if (this.boids.length > 1)
    {
        boid = this.boids.list[this.boids.list.length - 1];
        boid.sprite.destroy();
        boid.sprite = null;
        this.boids.remove(boid);
    }
};