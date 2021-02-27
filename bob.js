class Bob {
    constructor(x, y, r) {
        var options = {
            restitution: 0.5,
            density: 1.2,
            friction: 0.7
        }
        this.body = Bodies.circle(x, y, (r/2)+17, options);
        this.r = r;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        fill("silver");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}