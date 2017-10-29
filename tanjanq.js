
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const colorArray=["#E7A5A0",
                    "#F2DE79", 
                    "#C9283E",
                    "#3C3F3A",
                    "#21A68D",
                    "#A65B92",
                    "#E8CF00",
                    "#0176D8"
                   ];
  
const rand=function(num){
    return Math.floor(Math.random()*num)+1
  };

  
const createPoints = function(count, canvasWidth, canvasHeight) {
   const arr=[];
    const forEach=function(index){
        if(count===index){
            return;
        };
        arr[index]={
        x      : rand(canvas.width),
        y      : rand(canvas.height),
        width  : 30,
        height : 30,
        xDelta : 1,
        yDelta : 1,
        color: colorArray[rand(8)-1]
        } ;
return forEach(index+1);
}
forEach(0);
    return arr;
}
  

const myarr = createPoints(8, canvas.width, canvas.height);

const render= function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
    const forEach1 =  function(array,idx){
        if(idx >= array.length ){
            return;
        }
    context.fillStyle=array[idx].color;
    context.fillRect(array[idx].x, array[idx].y, array[idx].width, array[idx].height);
        forEach1(array,idx+1);  
    };
        forEach1(myarr,0);
};
  
const updateData = function(){
    const forEach2=function(array,index){
        if(index === array.length ){
            return;
        };
        if (array[index].x >= canvas.width-array[index].width ){ 
            array[index].xDelta = -1;
        }       
        if (array[index].x <= 0){
            array[index].xDelta = 1;
        
        }   
        if (array[index].y >= canvas.height-array[index].height){ 
            array[index].yDelta = -1;
        }   
        if (array[index].y <= 0){
            array[index].yDelta = 1;
        }   
        
array[index].x += array[index].xDelta;
array[index].y += array[index].yDelta;
    forEach2(array,index+1);
}; 
forEach2(myarr,0);
};
 
const loop=function() { 
    render();
    updateData();  
    requestAnimationFrame(loop);     
    };    
  
loop();

                