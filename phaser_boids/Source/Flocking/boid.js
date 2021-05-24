var Boid = new Phaser.Class({
    initialize: function Boid(scene)
    {
        this.scene = scene;

        this.SPEED = 5;
        this.SMOOTHING = 0.2;
        this.WALL_DETECT_DISTANCE = 8;
    }
});

Boid.prototype.Initialize = function(fm)
{
    this.sprite = this.scene.add.image(Math.random() * this.scene.cameras.main.width, Math.random() * this.scene.cameras.main.height, 'triangle');
    this.sprite.scale = 0.25;

    this.refBoidMovement = new BoidMovement();
    this.refBoidMovement.Initialize(fm);

    this.previousDirection = new Vector2(0, 0);

    // set a random direction to start off with
    this.sprite.angle = Math.random() * 360;

    this.id = Math.random() * 100;
};

Boid.prototype._PhysicsProcess = function()
{
    // calculate vector of reflection off of surfaces
    collisionReflection = this.GetReflectionVector();

    // calculate new flocking direction
    newFlockDirection = this.refBoidMovement.GetFlockDirection(this.scene.physics.velocityFromAngle(this.sprite.angle, 1), new Vector2(this.sprite.x, this.sprite.y), this.GetReflectionVector());

    // smoothly interpolate between our newly calculate direction and the previous one
    direction = this.previousDirection.lerp(newFlockDirection, this.SMOOTHING);

    // actually move the boid
    newDirection = this.previousDirection.add(direction);
    newDirection = newDirection.normalize();
    newDirection = newDirection.scale(this.SPEED);
    this.sprite.x += newDirection.x;
    this.sprite.y += newDirection.y;

    // look in the direction we're moving
    angleIncr = Phaser.Math.Angle.BetweenPoints(new Vector2(this.sprite.x, this.sprite.y), new Vector2(this.sprite.x + newDirection.x, this.sprite.y + newDirection.y));
    this.sprite.rotation = angleIncr;

    this.previousDirection = newDirection;

    this.ScreenWrap();
};

Boid.prototype.GetReflectionVector = function()
{
    var result = Vector2.ZERO;

    // get the reflection vector using a raycast

    return result;
};

Boid.prototype.ScreenWrap = function()
{
    if (this.sprite.x > 810)
    {
        this.sprite.x = -5;
    }
    else if (this.sprite.x < -10)
    {
        this.sprite.x = 800;
    }

    if (this.sprite.y > 610)
    {
        this.sprite.y = -5;
    }
    else if (this.sprite.y < -10)
    {
        this.sprite.y = 600;
    }
}