const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var sling;
var hexagon;


function preLoad() {
  polygonImg = loadImage(polygonIMG.png)
}

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(500,650,350,10)
    platform2 = new Ground(1000,400,350,10)

   // PLATFORM 1:

    // stack 1, level 1
    box1 = new Box(430,630,100,120)
    box2 = new Box(490,630,100,120)
    box3 = new Box(550,630,100,120)
    box4 = new Box(610,630,100,120)
    box5 = new Box(370,630,100,120)
   fill(255,157,243)
   //stack1, level 2
    box6 = new Box(515,550,100,120)
    box7 = new Box(580,550,100,120)
    box8 = new Box(450,550,100,120)
    box9 = new Box(390,550,100,120)
    //stack1, level 3
    box10 = new Box(430,460,100,120)
    box11 = new Box(490,460,100,120)
    box12 = new Box(540,460,100,120)
    // stack1, top level
    box13 = new Box(490,390,100,120)

    //PLATFORM 2:

 //stack 2, level 1
 box14 = new Box(990,380,100,120)
 box15 = new Box(935,380,100,120)
 box16 = new Box(890,380,100,120)
 box17= new Box(1040,380,100,120)
 box18 = new Box(1090,380,100,120)
fill(255,157,243)
//stack 2, level 2
 box19 = new Box(965,300,100,120)
 box20 = new Box(1015,300,100,120)
 box21= new Box(915,300,100,120)
 box22 = new Box(1065,300,100,120)
 //stack 2, level 3
 box23 = new Box(1045,240,100,120)
 box24 = new Box(1005,240,100,120)
 box25 = new Box(960,240,100,120)
 //stack 2, top level
 box26 = new Box(1000,100,100,120)

// polygon
hexagon = new Polygon(100,1000,50)

 //slingshot
 sling = new SlingShot(hexagon.body,{x: 100,y: 1000})



    Engine.run(engine)
}

function draw() {
  background("grey")
  Engine.update(engine)
  platform1.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  hexagon.display();
  sling.display();
  console.log(hexagon.x, hexagon.y)
  drawSprites();
}