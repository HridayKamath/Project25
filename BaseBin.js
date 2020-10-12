class BaseBin {
    constructor(x,y) {
      var options = {
          'isStatic' :false,
          'restitution':0.2,
          'friction':10.3,
          'density':1.2,
         
      }
      this.body = Bodies.rectangle(x, y, 130,150, options);
      this.width = 130;
      this.height = 150;
      //this.radius = 10;

      
      World.add(world, this.body);
      this.image = loadImage("images/dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //pos.x = mouseX;
      //pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //fill("green");
     //stroke("green");
      //circle(0, 0, this.radius);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);

      /*rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);*/


      pop();
    }
  };
