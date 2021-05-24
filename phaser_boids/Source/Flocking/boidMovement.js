var BoidMovement = new Phaser.Class({
    Extends: Phaser.GameObjects.Container,

    initialize: function BoidMovement(scene)
    {
        this.scene = scene;

        this.WEIGHT_WANDER = 0.2;
        this.WEIGHT_SEPARATION = 0.4;
        this.WEIGHT_ALIGNMENT = 0.2;
        this.WEIGHT_COHESION = 0.2;

        this.WEIGHT_REFLECTION = 0.1;
    }
});

var Vector2 = Phaser.Math.Vector2;

BoidMovement.prototype.Initialize = function(fm)
{
    this.refFlockManager = fm;
};

BoidMovement.prototype.GetFlockDirection = function(forward, position, reflection)
{
    // save the current forward direction for use in calculation
    this.currentForward = forward;
    this.currentPosition = position;

    boids = this.refFlockManager.GetBoids();

    wander = cohesion = alignment = separation = Vector2.ZERO;

    // get all of our weighted flock directions
    wander = this.GetWander();
    cohesion = this.GetCohesion(boids);
    alignment = this.GetAlignment(boids);
    separation = this.GetSeparation(boids);

    wander.scale(this.WEIGHT_WANDER);
    cohesion.scale(this.WEIGHT_COHESION);
    alignment.scale(this.WEIGHT_ALIGNMENT);
    separation.scale(this.WEIGHT_SEPARATION);

    result = new Vector2(0, 0);
    result = result.add(wander);
    result = result.add(cohesion);
    result = result.add(alignment);
    result = result.add(separation);
    result = result.add(reflection.scale(this.WEIGHT_REFLECTION));
    return result;
};

BoidMovement.prototype.GetWander = function()
{
    x = GetRandBetweenNegativeOneAndOne();
    y = GetRandBetweenNegativeOneAndOne();
    vector = new Vector2(x, y);

    return vector.add(this.currentForward);
};

BoidMovement.prototype.GetSeparation = function(boids)
{
    result = Vector2.ZERO;

    // find all boids in range and accumulate an average direction vector
    boids.list.forEach(element =>
    {
        distance = this.GetDistance(this.currentPosition, element.sprite.x, element.sprite.y);
        if (distance < this.refFlockManager.DISTANCE_SEPARATION)
        {
            // add the direction away from the other boid, multiplied by a scalar that increases the closer the boid is
            //result += (currentPosition - boids[i].Translation) * ((refFlockManager.distanceSeparation * 0.8f) - distance);

            difference = this.currentPosition.subtract(new Vector2(element.sprite.x, element.sprite.y));
            scalar = (this.refFlockManager.DISTANCE_SEPARATION) - distance;
            product = difference.scale(scalar);

            result = result.add(product);
        }
    });

    // calculate an average
    if (boids.length != 0)
    {
        result.x /= boids.length;
        result.y /= boids.length;
    }

    return result;
};

BoidMovement.prototype.GetAlignment = function(boids)
{
    result = new Vector2(0, 0);

    // find all boids in range and accumulate an average direction vector
    boids.list.forEach(element =>
    {
        distance = this.GetDistance(this.currentPosition, element.sprite.x, element.sprite.y);
        if (distance < this.refFlockManager.DISTANCE_ALIGNMENT)
        {
            // add direction the other boid is moving in, multiplied by a scalar that increases the closer the boid is
            scaled = this.scene.physics.velocityFromAngle(element.angle, 1).scale(this.refFlockManager.DISTANCE_ALIGNMENT - distance);
            result = result.add(this.scene.physics.velocityFromAngle(element.angle, 1).scale(this.refFlockManager.DISTANCE_ALIGNMENT - distance));

            IncrementTogetherCount(i);
        }
    });

    // calculate an average
    if (boids.length != 0)
    {
        result.x /= boids.length;
        result.y /= boids.length;
    }

    return result;
};

BoidMovement.prototype.GetCohesion = function(boids)
{
    result = Vector2.ZERO;

    // find all boids in range and accumulate an average direction vector
    boids.list.forEach(element =>
    {
        distance = this.GetDistance(this.currentPosition, element.sprite.x, element.sprite.y);
        if (distance < this.refFlockManager.DISTANCE_COHESION)
        {
            // add the direction to the other boid
            result = new Vector2(element.sprite.x, element.sprite.y).subtract(this.currentPosition);
        }
    });

    // calculate an average
    if (boids.length != 0)
    {
        result.x /= boids.length;
        result.y /= boids.length;
    }

    return result;
};

BoidMovement.prototype.GetDistance = function(vector, x, y)
{
    return Math.sqrt(Math.pow(x - vector.x, 2) + Math.pow(y - vector.y, 2));
};