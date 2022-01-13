var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png"); //loadImage de path (camino)
  boyImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png");//loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);
 path=createSprite(200,200,250,300);//crear sprite de path (camino) 
 path.addImage("camino",pathImg);//agregar imagen de path
 path.velocityY=5;//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.scale=0.81;//escala del path

 boy=createSprite(200,350,100,100);//crear sprite de boy (niño)
 boy.addAnimation("boy_runnig",boyImg);//agregar animación para boy
 boy.scale=0.51;//escla del boy
  
  // crear  left Boundary (límite izquierdo)
  leftBoundary=createSprite(0,0,100,800);
  //establecer visibilidad como false (falso) para límite izquierdo
  leftBoundary.visible=false;
  //crear right Boundary (límite derecho)
  rightBoundary=createSprite(410,0,100,800);
  //establecer visibilidad como false (falso) para límite derecho
  rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  boy.x=World.mouseX;// boy moviéndose en el eje X con el mouse
  //moveboy();
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);// colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  
  if(path.y > 400 ){//código para reiniciar el fondo
    path.y = height/2;
  }
  
  drawSprites();
}

/*function moveboy(){//temporal
  if(keyDown("left_arrow")){
    boy.x=boy.x -5;
  }
  if (keyDown("right_arrow")){
    boy.x=boy.x +5;
  }
}*/