class Ball{
    constructor(x,y,r){
        var ball_options={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
    
        } 

        this.body = Bodies.circle(x,y,r,ball_options)
        this.r = r
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r)
    }
}