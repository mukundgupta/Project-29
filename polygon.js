class Polygon {
    constructor(x,y,diameter){
        var options = {
            isStatic: false,
            restitution: 0.8,
             friction: 1.0,
             density: 1.2
        }
        this.diameter = diameter
        this.body =  Bodies.circle(x,y,diameter,options)
        World.add(world,this.body)

    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(0,0,this.diameter,this.diameter)
        pop()
    }
}