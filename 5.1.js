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
          }

     const draw = function() {
     	context.fillStyle = point.color;
        context.fillRect(point.x, point.y, point.width, point.height);
    };

    

const createPoints = function(count, canvasWidth, canvasHeight) {
    const arr=[]
    const func=function(index){
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
        color: colorArray[rand(3)-1]
} ;
return func(index+1);
}
func(0)
return arr;
}
console.log(createPoints(4,200,300))

