class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")

    //create an empty array called this.trajectory
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    /*to form the trajectory only when the bird moves at a cretain speed and also not to form 
    the trajectory when the bird is pulled to the left of the sling shot*/

    if(this.body.velocity.x>10 && this.body.position.x>200){
    //create an array called position to store the x and y positions of the the bird
var position=[ this.body.position.x, this.body.position.y ]       //length = 2

//push the position array into the empty trajectory array
this.trajectory.push(position);
    }
//for(start the repetition; stop the repetition; how to repeat in the next loop){
  //image(imagename,x,y)
//}

for(var i=0; i<this.trajectory.length; i++ ){
  image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
}

    super.display();
  }
}
