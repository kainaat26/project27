class Rope {
    constructor(bodyA,pointB){
        var options = {
            stiffness : 0.04,
            bodyA:bodyA,
            pointB:pointB
        }

    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}