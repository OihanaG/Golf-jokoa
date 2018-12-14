/* Burak Kanber */
		var width = 1100;
		var height = 650;
		var canvas = ctx = false;
		var frameRate = 1/40; // Seconds
		var frameDelay = frameRate * 1000; // ms
		var loopTimer = false;
		var maila=1;
		var friction = 0.97;
		var haizeaefektua = 0.45;
		var hasiera=0;
		/*
		 * Experiment with values of mass, radius, restitution,
		 * gravity (ag), and density (rho)!
		 *
		 * Changing the constants literally changes the environment
		 * the ball is in. 
		 * 
		 * Some settings to try:
		 * the moon: ag = 1.6
		 * water: rho = 1000, mass 5
		 * beach ball: mass 0.05, radius 30
		 * lead ball: mass 10, restitution -0.05
		 */
		var ball = {
			position: {x:0, y: 0},
			velocity: {x: 10, y: 0},
			mass: 0.1, //kg
			radius: 10, // 1px = 1cm
			restitution: -0.7
			};

		var Cd = 0.47;  // Dimensionless
		var rho = 1.22; // kg / m^3
		var A = Math.PI * ball.radius * ball.radius / (10000); // m^2
		var ag = 9.8;  // m / s^2
		var mouse = {x: 0, y: 0, isDown: false};

		function getMousePosition(e) {
			mouse.x = e.pageX - canvas.offsetLeft;
			mouse.y = e.pageY - canvas.offsetTop;
		}
		var mouseDown = function(e) {
			if (e.which == 1) {
				getMousePosition(e);
				mouse.isDown = true;
				//ball.position.x = mouse.x;
				//ball.position.y = mouse.y;
			}
		}
		var mouseUp = function(e) { 
			if (e.which == 1) {
				mouse.isDown = false;
				ball.velocity.y = (ball.position.y - mouse.y) /10;
				ball.velocity.x = (ball.position.x - mouse.x) / 10;
				hasiera ++;
			}
		}

		var setup = function() {
			canvas = document.getElementById("canvas");
			ctx = canvas.getContext("2d");

			// Pelotaren hasierako posizioa
			ball.position.x = 30;
			ball.position.y = 490;

			
			canvas.onmousemove = getMousePosition;
			canvas.onmousedown = mouseDown;
			canvas.onmouseup = mouseUp;
			
			loopTimer = setInterval(loop, frameDelay);
		}
		var loop = function() {

			ctx.clearRect(0,0,width,height);

			// Atzeko planoa
			ctx.fillStyle = "#29B6F6";
			ctx.fillRect(0,0,width, height);
			if (maila==1){
				ctx.beginPath();
				ctx.fillStyle = "#8BC34A";		
				ctx.moveTo(0, 500);
				ctx.lineTo(150, 500);
				ctx.lineTo(150, 350);
				ctx.lineTo(150, 350);
				ctx.lineTo(250, 350);
				ctx.lineTo(250, 450);
				ctx.lineTo(450, 450);
				ctx.lineTo(450, 200);
				ctx.lineTo(650, 200);
				ctx.lineTo(650, 400);
				ctx.lineTo(800, 400);
				ctx.lineTo(800, 300);
				ctx.lineTo(850, 300);
				ctx.lineTo(850, 200);
				//Zuloa
				ctx.lineTo(900, 200);
				ctx.lineTo(900, 250);
				ctx.lineTo(950, 250);
				ctx.lineTo(950, 200);
				//Zuloa
				ctx.lineTo(1100, 200);
				ctx.lineTo(1100, 650);
			    ctx.lineTo(0, 650);
		 	    ctx.lineTo(0, 450);
		 	    ctx.fill();
				ctx.closePath();
			}
			if (maila==2){
				ctx.beginPath();
				ctx.fillStyle = "#8BC34A";
			    ctx.bezierCurveTo(0,450,50,500,200,400);
			    ctx.bezierCurveTo(300,350,400,300,500,450);
			    ctx.bezierCurveTo(500,450,650,600,950,400);
			    ctx.moveTo(950, 400);
			    //Zuloa
			    ctx.lineTo(1000, 400);
			    ctx.lineTo(1000, 450);
			    ctx.lineTo(1050, 450);
		 	    ctx.lineTo(1050, 400);
		 	    //Zuloa
		 	    ctx.lineTo(1100, 400);
		 	    ctx.lineTo(1100, 650);
		 	    ctx.lineTo(0, 650);
		 	    ctx.lineTo(0, 450);
		 	    ctx.fill();
				ctx.closePath();
			}
			if(maila==3){
				ctx.beginPath();
				ctx.fillStyle = "#8BC34A";
				ctx.moveTo(0, 430);
				ctx.lineTo(80, 430);
			    ctx.bezierCurveTo(80,430,200,320,480,460);
			    ctx.bezierCurveTo(460,450,650,600,900,325);
				//Zuloa
				ctx.lineTo(900, 325);
				ctx.lineTo(900, 375);
				ctx.lineTo(950, 375);
				ctx.lineTo(950, 325);
				//Zuloa
				ctx.lineTo(1000, 325);
				ctx.bezierCurveTo(1000, 325, 1050, 325, 1100, 250);
		 	    ctx.lineTo(1100, 650);
		 	    ctx.lineTo(0, 650);
		 	    ctx.lineTo(0, 450);
		 	    ctx.fill();		
				ctx.closePath();		
			}	
			//Helmuga

			if(maila==1){
				ctx.beginPath();
				ctx.fillStyle = "#000000";
				ctx.rect(900, 200, 50, 50);
				ctx.fill();
				ctx.closePath();
				bandera = new Image();
				bandera.src = 'img/bandera.png';
				ctx.drawImage(bandera, 0,0, 631, 1074, 940, 100, 50, 100);		
			}
			if(maila==2){
				ctx.beginPath();
				ctx.fillStyle = "#000000";
				ctx.rect(1000, 400, 50, 50);
				ctx.fill();
				ctx.closePath();
				bandera = new Image();
				bandera.src = 'img/bandera.png';
				ctx.drawImage(bandera, 0,0, 631, 1074, 1035, 300, 50, 100);
			}
			if(maila==3){
				ctx.beginPath();
				ctx.fillStyle = "#000000";
				ctx.rect(900, 325, 50, 50);
				ctx.fill();
				ctx.closePath();
				bandera = new Image();
				bandera.src = 'img/bandera.png';
				ctx.drawImage(bandera, 0,0, 631, 1074, 940, 225, 50, 100);
			}			

			if ( ! mouse.isDown && hasiera != 0) {
				// Do physics
					// Drag force: Fd = -1/2 * Cd * A * rho * v * v
				var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
				var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);
				
				Fx = (isNaN(Fx) ? 0 : Fx);
				Fy = (isNaN(Fy) ? 0 : Fy);
				
					// Calculate acceleration ( F = ma )
				var ax = Fx / ball.mass;
				var ay = ag + (Fy / ball.mass);

					// Integrate to get velocity
				ball.velocity.x += ax*frameRate;
				ball.velocity.y += ay*frameRate;
				
					// Integrate to get position
				ball.position.x += ball.velocity.x*frameRate*100;
				
				var imgData = ctx.getImageData(ball.position.x, ball.position.y+ball.radius+1, 1, 1);
				var r = imgData.data[0];
				var g = imgData.data[1];
				var b = imgData.data[2];
				if(r != 139 && g != 195 && b != 74 || ball.velocity.y < 0.1){
					ball.position.y += ball.velocity.y*frameRate*100;					
				}
			}

			// Handle collisions
			if (ball.position.y > height - ball.radius) {
				ball.velocity.y *= ball.restitution;
				ball.position.y = height - ball.radius;
			}
			if (ball.position.x > width - ball.radius) {
				ball.velocity.x *= ball.restitution;
				ball.position.x = width - ball.radius;
			}
			if (ball.position.x < ball.radius) {
				ball.velocity.x *= ball.restitution;
				ball.position.x = ball.radius;
			}

			//Marruskadura
			var friction = 0.97
			var imgData = ctx.getImageData(ball.position.x, ball.position.y+ball.radius+1, 1, 1);
			var r = imgData.data[0];
			var g = imgData.data[1];
			var b = imgData.data[2];
			if(r == 139 && g == 195 && b == 74 && ! mouse.isDown){
				ball.velocity.x= ball.velocity.x*friction;				
			}

			//Haizea
			if(maila==1){
				var imgData = ctx.getImageData(ball.position.x - ball.radius-50, ball.position.y + ball.radius+1, 1, 1);
				var r = imgData.data[0];
				var g = imgData.data[1];
				var b = imgData.data[2];
				if(ball.velocity.x > haizeaefektua || ball.velocity.x < -haizeaefektua || ball.velocity.y > haizeaefektua-0.4){
					if(r != 139 && g != 195 && b != 74){
						ball.velocity.x += 0.05;	
					}	
				}
				ctx.font = "bold 20px Calibri";
				ctx.fillStyle="black";
				ctx.fillText("Haizea >",30,30);				
			}
			if(maila==2){
				var imgData = ctx.getImageData(ball.position.x - ball.radius-40, ball.position.y + ball.radius+1, 1, 1);
				var r = imgData.data[0];
				var g = imgData.data[1];
				var b = imgData.data[2];
				if(ball.velocity.x > haizeaefektua || ball.velocity.x < -haizeaefektua || ball.velocity.y > haizeaefektua-0.4){
					if(r != 139 && g != 195 && b != 74 || ball.velocity.y < 0.1){
						ball.velocity.x -= 0.05;
						ball.velocity.y -= 0.08;
					}				
				}
				ctx.font = "bold 20px Calibri";
				ctx.fillStyle="black";
				ctx.fillText("Haizea ",30,30);
				haizea = new Image();
				haizea.src = 'img/haizea.png';
				ctx.drawImage(haizea, 0,0, 713, 731, 90, 20, 15, 15);
			}
			if(maila==3){
				var imgData = ctx.getImageData(ball.position.x, ball.position.y + ball.radius+1, 1, 1);
				var r = imgData.data[0];
				var g = imgData.data[1];
				var b = imgData.data[2];
				if(ball.velocity.x > haizeaefektua || ball.velocity.x < -haizeaefektua || ball.velocity.y > haizeaefektua-0.4){
					if(r != 139 && g != 195 && b != 74 || ball.velocity.y < 0.1){
						ball.velocity.x -= 0.02;	
					}	
				}
				ctx.font = "bold 20px Calibri";
				ctx.fillStyle="#black";
				ctx.fillText("Haizea <",30,30);
			}
			

			// Pelota zuloan
			
			if(maila==1){
				if(ball.position.x > 900 && ball.position.x < 950 && ball.position.y < 250 && ball.position.y > 200 && ball.velocity.x < 0.2 && ball.velocity.x < -0.2 && ball.velocity.y < 0.2){
					maila ++;
					ball.position.x = 52;
					ball.position.y = 454;
					hasiera = 0;
				}	
			}
			if(maila==2){
				if(ball.position.x > 1000 && ball.position.x < 1050 && ball.position.y < 450 && ball.position.y > 400 && ball.velocity.x < 0.2 && ball.velocity.x < -0.2 && ball.velocity.y < 0.2){
					maila ++;
					ball.position.x = 32;
					ball.position.y = 420;
					hasiera = 0;
				}	
			}
			if(maila==3){
				if(ball.position.x > 900 && ball.position.x < 950 && ball.position.y < 375 && ball.position.y > 325 && ball.velocity.x < 0.2 && ball.velocity.x < -0.2 && ball.velocity.y < 0.2){
					alert("Irabazi duzu!!!"); 
				}
			}	

			//Mailak agertzea

			ctx.font = "bold 40px Calibri";
			ctx.fillStyle="black";
			ctx.fillText("Maila  " + maila ,900,35);	

			// Draw the ball
			
			ctx.save();
			
			ctx.translate(ball.position.x, ball.position.y);
			ctx.beginPath();
			ctx.fillStyle = "#FDFEFE";
			ctx.arc(0, 0, ball.radius, 0, Math.PI*2, true);
			ctx.fill();
			ctx.closePath();		
			ctx.restore();

			// Draw the slingshot
			if (mouse.isDown) {
				ctx.beginPath();
				ctx.moveTo(ball.position.x, ball.position.y);
				ctx.lineTo(mouse.x, mouse.y);
				ctx.stroke();
				ctx.closePath();
			}

			//Pelotaren azpiko pixela
			var imgData = ctx.getImageData(ball.position.x, ball.position.y+ball.radius+2, 1, 1);
			var r = imgData.data[0];
			var g = imgData.data[1];
			var b = imgData.data[2];
			if(r == 139 && g == 195 && b == 74 && ! mouse.isDown){
				ball.velocity.y = -ball.velocity.y*0.95;
			}

			//Pelotaren ezkerreko pixela
			var imgData = ctx.getImageData(ball.position.x-ball.radius-2, ball.position.y, 1, 1);
			var r = imgData.data[0];
			var g = imgData.data[1];
			var b = imgData.data[2];
			if(r == 139 && g == 195 && b == 74 && ! mouse.isDown){
				ball.velocity.x = -ball.velocity.x*0.95;					
			}

			//Pelotaren eskumako pixela
			var imgData = ctx.getImageData(ball.position.x+ball.radius+2, ball.position.y, 1, 1);
			var r = imgData.data[0];
			var g = imgData.data[1];
			var b = imgData.data[2];
			if(r == 139 && g == 195 && b == 74 && ! mouse.isDown){
				ball.velocity.x = -ball.velocity.x*0.95;					
			}
		}
			setup();