
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const backgroundImage=new Image();
    backgroundImage.src='https://chupacdn.s3.amazonaws.com/catalog/product/cache/1/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/g/a/game-background-7980_imgs_7980_4.jpg';

  const heroImage=new Image();   
    heroImage.src='https://samekindofnerdyasme.files.wordpress.com/2016/03/tumblr_nwt7osvhfy1ry7whco1_400.png';

  const badImage=new Image();   
    badImage.src='https://vignette.wikia.nocookie.net/disney/images/e/e1/Nick_Wilde_Disney_INFINITY.png/revision/latest?cb=20160127173009';

  
  const rand=function(num){
    return Math.floor(Math.random()*num)+1
  };

  const gameData = {
   hero:{
      x: 300,
      y: 300,
      width: 150,
      height: 150,
      xDelta: 1,
      yDelta: 1,
      img: heroImage
    }
  }
    
  const hero=gameData.hero;

  const badGuys=[]
  const createPoints = function(count , canvasWidth, canvasHeight ){
    const arr=[]
    if(count === 0){
		return arr;
  };
	const badGuys = {
		x: rand(canvas.width),
    y: rand(canvas.height),
		width : 100,
		height : 100,
		xDelta : 1,
		yDelta : 1,
    image: badImage
};
	createPoints(count-1,canvasWidth,canvasHeight);
}
createPoints(3, canvas.width, canvas.height);
  
  const draw= function(){
    context.drawImage(backgroundImage,0,0,canvas.width, canvas.height);
    context.drawImage(heroImage,hero.x, hero.y,hero.width,hero.height);
     const forEach = function(arr, i) {
    if(i === arr.length) {
      return;
  }
    context.drawImage(badImage, badGuys[i].x, badGuys[i].y, badGuys[i].width, badGuys[i].height);
    forEach(arr, i+1);
  };
    forEach(badGuys, 0);
  };
  
  const updateData = function(){
    const forEach2=function(arr,index){
        if(index === arr.length ){
            return;
        };
        if (badGuys[index].x >= canvas.width-badGuys[index].width ){ 
            badGuys[index].xDelta = -1;
        }       
        if (badGuys[index].x <= 0){
            badGuys[index].xDelta = 1;
        
        }   
        if (badGuys[index].y >= canvas.height-badGuys[index].height){ 
            badGuys[index].yDelta = -1;
        }   
        if (badGuys[index].y <= 0){
            badGuys[index].yDelta = 1;
        }   
        
badGuys[index].x += badGuys[index].xDelta;
badGuys[index].y += badGuys[index].yDelta;
    
    forEach2(arr,index+1);
}; 
forEach2(badGuys,0);
};

const loop=function(){
  draw();
  updateData();
  requestAnimationFrame(loop);
};
loop();

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

 document.addEventListener('keydown', function(event) {
  const hero=gameData.hero;
  if(event.keyCode === rightKey) {
    hero.x=hero.x+5;
  }
      if(hero.x>=canvas.width-hero.width){
         hero.xDelta=-1;
  }
  else if(event.keyCode === leftKey){
    hero.x=hero.x-5;
  }
      if(hero.x<=0){
         hero.x=canvas.width-hero.width;
  }

  else if(event.keyCode===downKey){
    hero.y=canvas.height-hero.height;
  }
  else if(event.keyCode === upKey){
    if(hero.yDelta !==0){
      hero.yDelta=3;
  }
 }
}, false);
