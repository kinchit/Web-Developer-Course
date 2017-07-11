function getRandomColor() {
	//String of letters and number. Using the split we make it into an array
	var letters = '0123456789ABCDEF'.split('');
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
  		}
	return color;
	}
			
			
	var createdTime;
	var clickedTime;
	var reactionTime;
			
	function makeBox(){
		var x = Math.random();
		x = x*5000;
		setTimeout(function(){
			var top = Math.random();
			top = top * 300;
			var left = Math.random();
			left = left * 300;
			document.getElementById("square").style.top=top+"px";
			document.getElementById("square").style.left=left+"px";
			if(Math.random() > 0.5) {
				document.getElementById("square").style.borderRadius="100px";
				}
			else {
				document.getElementById("square").style.borderRadius="0px";
				}
			document.getElementById("square").style.backgroundColor=getRandomColor();
			document.getElementById("square").style.display="block";
			createdTime = Date.now();
			}, x);
		}
			
		document.getElementById("square").onclick=function() {
				
				//we can use the following or the one after that
				//document.getElementById("square").style.display="none";
				
				//If we are using the same id element that we are clicking we can also use this
				
		clickedTime=Date.now();
				
		reactionTime = (clickedTime - createdTime)/1000;
		//alert(reactionTime);
		document.getElementById("time").innerHTML=reactionTime;
		this.style.display="none";
		makeBox();
			}
		makeBox();