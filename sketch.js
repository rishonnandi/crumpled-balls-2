
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	 createCanvas(1200, 500);
	 engine = Engine.create();
	 world = engine.world;
	
    
   ground = new Ground(600,height,1200,20);
   paperObject=new Paper(200,480,70);
   dustbinObj=new dustbin(600,height,1200,20);
   
   
}


function draw() {
   background(0);
    Engine.update(engine);
    ground.display();
    paperObject.display();
    dustbinObj.display();
    paperObject.image=loadImage("paper.png");
    text(mouseX + ","+mouseY,mouseY,mouseY);
    drawSprites();
 }
 

  function keyPressed(){
     if(keyCode===UP_ARROW){
    
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});

     }

       }


