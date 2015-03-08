(function(){
	
	function init(){
			var vid = document.getElementById("audio");
			vid.autoplay = true;
			// vid.load();
			
			var canvas=document.getElementsByTagName("canvas")[0];
			canvas.width=screen.width;
			canvas.height=screen.height;
			var ctx = canvas.getContext("2d");

			var pic=new Image();
			pic.src="images/snow.png";	
			pic.addEventListener("load",function(){
				ctx.drawImage(pic,0,0,canvas.width,canvas.height);
			});

			var flakes=[];

			// adds flake into flakes array
			function addFlake(){
				var random={x:Math.floor((Math.random()*canvas.width)+1),y:0,width:15,height:15,r:4};
				flakes.push(random);
			}
			

			function snow(){
				// Add a new flake every time the snow function is called.
				addFlake();
				
				for(var i=0;i<flakes.length;i++){
					ctx.fillStyle="rgba(255,255,255,0.75)";
					ctx.beginPath();
					ctx.arc(flakes[i].x,flakes[i].y,flakes[i].r,0,2*Math.PI,false);
					ctx.fill();
					
					if(flakes[i].y<800){
						flakes[i].y+=2.5;
					}else{
						// remove the flake pnce it reaches the bottom of the canvas
						flakes.splice(i,1);
					}
				}
			}

			function animate(){
				// redraw the canvas frame by frame
				ctx.clearRect(0,0,canvas.width,canvas.height);
				ctx.drawImage(pic,0,0,canvas.width,canvas.height);
				snow();
			}

			// Call animate function continuously for every 30 milliseconds
			var animateInterval=setInterval(animate,30);
	}
	window.addEventListener('load',init,false);
}());
