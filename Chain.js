class Chain
{
    constructor(body1,point2)
    {
     
        var options =
        {
            bodyA:body1,
            pointB:point2,
            stiffness:0.8,
            length:80.0

        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.point2 = point2;

    }
     
    display()
    {
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.point2.x,this.point2.y);
    }

}