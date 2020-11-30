class Box {

constructor(x,y,width,height){

var options = {
    restitution :0.4,
    friction :0.0
}
this.Boxbody = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.visibility = 255
World.add(world,this.Boxbody)
}

display(){

if (this.Boxbody.speed<3){
    var pos = this.Boxbody.position
    var angle = this.Boxbody.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("pink")
    rect(0,0,this.width,this.height)
    pop()
}
else{
    World.remove(world,this.body);
    push()
  tint(255,this.visibility)
  image(this.image,this.body.position.x,this.body.position.y,50,50)
  this.visibility = this.visibility -0.1
  pop()
}

}
}