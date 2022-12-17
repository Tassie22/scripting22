// JavaScript Document
//First Question
function write(){
	console.log("Hurray, Username works");

var name = document.getElementById('name').value;
	console.log(name);
	
var seasMessage;

console.log(seasMessage);

document.getElementById('nameOutput').innerHTML = name;	
}
//intializing a variable- this variable is an Object
//the properties will hold the file name that we are going to show
var character={face:"", glasses:""};


//this function will set the face property
function setFace(changling){
	character.face=changling;
	console.log(character.face);
	//run the body builder function
	bodyBuilder();
}

//this function will set the glasses property
function setGlasses(changling){
	character.glasses=changling;
	console.log(character.glasses);
	//run the body builder function
	bodyBuilder();
}

function bodyBuilder(){
	
	if(character.face!=""){
	document.getElementById('face').innerHTML="<img class='img-fluid' src='thoughts/"+character.face+"' alt='face'>";
	}
	document.getElementById('glasses').innerHTML="<img class='img-fluid' src='thoughts/"+character.glasses+"' alt='face'>";
	
}

//// JavaScript Document