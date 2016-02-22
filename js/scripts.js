var clickedTime; var createdTime; var reactionTime;var count = 0;
		
	
		function makeBox(){
			if(count<10){
				createdTime = Date.now();
				var time = Math.random();
				time = time * 1000;
				setTimeout(function(){
				
					if(Math.random()>0.5){
						document.getElementById("box").style.borderRadius="100px";
					}else{
						document.getElementById("box").style.borderRadius="0";
					}
					var top = Math.random();
					top = top * 300;
					var left = Math.random();
					left = left * 500;
					document.getElementById("box").style.top = top + "px";
					document.getElementById("box").style.left = left + "px";
					document.getElementById("box").style.backgroundColor=getRandomColor();
					document.getElementById("box").style.display="block";
					
				}, time);
				count++;
			}else{
				alert("The maximum play times are 10 per once.")
			}
		}
		
		function getRandomColor(){
			var letters = "0123456789ABCDEF".split('');
			var color = '#';
			for(var i=0; i<6; i++){
				color += letters[Math.round(Math.random()*15)];
			}
			return color;
		}
	
		document.getElementById("box").onclick=function(){
			clickedTime = Date.now();
			reactionTime = (clickedTime - createdTime)/1000;
			document.getElementById("reactiontimeset").innerHTML = reactionTime ;
			document.getElementById("countset").innerHTML = count;
			this.style.display="none";
			makeBox();
		}
		makeBox();
		