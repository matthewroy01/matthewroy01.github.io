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
        //for (i = 0; i < this.boids.list.length; ++i)
        //{
            //this.boids.list[i]._PhysicsProcess();
        //}
    }
};

FlockManager.prototype.GetBoids = function()
{
    return this.boids;
};