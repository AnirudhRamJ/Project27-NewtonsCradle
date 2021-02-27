class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //stiffness: 0.2,
            length: 200
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {

        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.sling.bodyA = null;
    }
}