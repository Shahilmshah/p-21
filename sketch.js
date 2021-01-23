var edges
var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1= createSprite(700,580,190,15);
    surface1.shapeColor="red";
    surface2= createSprite(500,580,190,15);
    surface2.shapeColor="blue";
    surface3= createSprite(300,580,190,15);
    surface3.shapeColor="green";
    surface4= createSprite(100,580,190,15);
    surface4.shapeColor="yellow";
    //create box sprite and give velocity
    box= createSprite(random(600,700),10,20,20)
    box.velocityY=12;
    box.velocityX=4;
    box.shapeColor="purple";
    

}

function draw() {
    background("BLACK");
    //create edgeSprite
    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
        box.shapeColor="red";
    }
    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
        box.shapeColor="blue";
    }
    if(box.isTouching(surface3)){
        box.collide(surface3);
        box.VelocityY=0;
        box.velocityX=0;
        box.shapeColor="green";
    }
    if(box.isTouching(surface4)){
        box.bounceOff(surface4);
        box.shapeColor="yellow";
        music.play();
    }

    edges= createEdgeSprites();
    box.bounceOff(edges);
    drawSprites();

    //add condition to check if box touching surface and make it box
}
