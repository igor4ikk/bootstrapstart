



function iphone(){

	let iphone_6 = [
	"display: 4.8",
	"memory: 128",
	"simcard: 1",
	"battery: 2500",
	"camera: 12px"
	];

	text = ' ';
	for (let i = 0; i < iphone_6.length; i++){
		text+= iphone_6[i] + "<br>";
	}
document.getElementById('iphone_6').innerHTML = text;
}



function form(){
	var message;
	let x = document.getElementById('yourName').value;
	if(x < 1 || x > 50){
		message = "yes";
	}else{
		message = "now";
	}
	document.getElementById('result').innerHTML = message;
}