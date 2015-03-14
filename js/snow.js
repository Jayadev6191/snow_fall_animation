(function(){
	
	function init(){
			var audio = document.getElementById("audio");
			audio.autoplay = true;

			var canvas=document.getElementsByTagName("canvas")[0];
			canvas.width=window.innerWidth;
			canvas.height=window.innerHeight;
			var ctx = canvas.getContext("2d");

		
			window.onresize=function(event){
				ctx.clearRect(0,0,canvas.width,canvas.height);
			}

			var flakes=[];

			// adds flake into flakes array
			function addFlake(){
				var random={x:Math.floor((Math.random()*canvas.width)+1)-350,y:Math.floor((Math.random()*canvas.height)-500)+250,width:15,height:15,r:4};
				flakes.push(random);
			}
			

			function snow(){
				// Add a new flake every time the snow function is called.
				addFlake();
				
				for(var i=0;i<flakes.length;i++){
					ctx.fillStyle="rgba(255,255,210,0.75)";
					ctx.beginPath();
					ctx.arc(flakes[i].x,flakes[i].y,flakes[i].r,0,2*Math.PI,false);
					ctx.fill();

					if(flakes[i].y<300){
						flakes[i].x+=4.0;
						flakes[i].y+=1.5;
					}

					if(flakes[i].y>300 || flakes[i].y<550){
						flakes[i].x+=3.5;
						flakes[i].y+=2.5;
					}

					if(flakes[i].y>550 || flakes[i].y<650){
						flakes[i].x+=2.5;
						flakes[i].y+=1.5;
					}

					if(flakes[i].y>650 || flakes[i].y<800){
						flakes[i].x-=2.0;
						flakes[i].y+=1.5;
					}

					else{
						// remove the flake once it reaches the bottom of the canvas
						flakes.splice(i,1);
						flakes.splice(i,1);

					}
				}
			}

			function animate(){
				// redraw the canvas frame by frame
				ctx.clearRect(0,0,canvas.width,canvas.height);
				// ctx.drawImage(pic,0,0,canvas.width,canvas.height);
				snow();
			}
			
			// Call animate function continuously for every 20 milliseconds
			var animateInterval=setInterval(animate,20);
	}
	window.addEventListener('load',init,false);
}());
