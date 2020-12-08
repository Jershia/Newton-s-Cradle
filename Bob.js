class Bob{
    constructor(x,y,r){
     var options = {
        isStatic : false,
         restitution:0.5,
         friction:15,
         density:1.2
     }
     this.x=x;
     this.y=y;
     this.r=r
    this.body = Bodies.circle(this.x,this.y,r/2,options)
    World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER)
     strokeWeight(5)
     stroke("blue")
     fill("pink")
     ellipse(0,0,this.r,this.r)
     pop();
    }
}