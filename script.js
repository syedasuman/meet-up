let txtPlayer1Name;
let txtPlayer2Name;
let playersName;
let textWord;
let textGuessWord;
function play(){
	let game=document.getElementById("game");
	textPlayer1Name=document.getElementById("txtPlayer1Name") .value;
	textPlayer2Name=document.getElementById("txtPlayer2Name") .value;
	playersName=document.querySelector("playersName");
	game.style.display="block";
	playerName.innerHTML="welcome"+textPlayer1Name+"and"+textPlayer2Name;
}
function guess(){
	textWord=document.querySelector("input").value;
	document.querySelector("input").value;
}
function check(){
	let result=document.querySelector("input").value;
	let textGuessWord=document.querySelector("input").value;
	if(textGuessWord===textWord){
		console.log("you Win");
	}else{
		console.log("You Lose");
	}
}