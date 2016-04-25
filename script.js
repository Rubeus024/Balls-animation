var myCanvas=document.createElement("canvas");
			myCanvas.height=550;
			myCanvas.width=1500;
			document.body.appendChild(myCanvas);
			var ctx=myCanvas.getContext("2d");
var arrayOfAtoms=new Array()
var pistonCoordinate=200;
function createArray (){
	for(var i=0 ; i<500 ; i++){
		arrayOfAtoms.push( new Atom() );
	}
	
}

function Atom(xDir,yDir){
	this.xPos=Math.round((Math.random()*myCanvas.width*0.8)+myCanvas.width*0.1);
	this.yPos=Math.round((Math.random()*myCanvas.height*0.55)+pistonCoordinate+30);
	this.xSpeed=Math.round((Math.random()*10)+2);
	this.ySpeed=Math.round((Math.random()*10)+2);
	this.radius=Math.round((Math.random()*5)+5);
	var xStart=Math.round( Math.random() );
	var yStart=Math.round( Math.random() );
	if(xStart){
	this.xDir=true;
	}
	else{
	this.xDir=false;
	}
	if(yStart){
	this.yDir=true;
	}
	else{
	this.yDir=false;
	}
}
Atom.prototype.update=function() {
	//document.write("alles gut?");
	if(this.xPos+this.radius>=myCanvas.width || this.xPos-this.radius<0){
		this.yDir=!this.yDir;
	}
	if(this.yPos+this.radius>myCanvas.height || this.yPos-this.radius<pistonCoordinate){
		this.xDir=!this.xDir;
	}
	
	
	if(this.xDir==true && this.yDir==true){
		this.xPos+=this.xSpeed;
		this.yPos+=this.ySpeed;
	}
	else if(this.xDir==true && this.yDir==false){
		this.xPos-=this.xSpeed;
		this.yPos+=this.ySpeed;
	}
	else if(this.xDir==false && this.yDir==true){
		this.xPos+=this.xSpeed;
		this.yPos-=this.ySpeed;
	}
	else {
		this.xPos-=this.xSpeed;
		this.yPos-=this.ySpeed;
	}
}


function drawAndUpdate(){
		for(var i=0; i<arrayOfAtoms.length ; i++){
			var obj=arrayOfAtoms[i];
			obj.update();
		ctx.beginPath();
		ctx.arc(obj.xPos,obj.yPos,obj.radius,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		}
		ctx.beginPath();
		ctx.moveTo(0,pistonCoordinate);
		ctx.lineTo(myCanvas.width,pistonCoordinate);
		ctx.stroke();
		ctx.closePath();
}

function cycle(){
		ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
		drawAndUpdate();
}

createArray();
setInterval(cycle,30);

/*
for(var i=0 ; i<arrayOfAtoms.length ; i++){
	document.write(arrayOfAtoms[i]);
}*/
//document.write("alles gut");