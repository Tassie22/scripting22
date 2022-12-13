// JavaScript Document

//First Question
function write(){
	console.log("Hurray, Username works");

var userName = document.getElementById('name').value;
	console.log(userName);


//Second Question
var partner = document.getElementById('partner').value;
	console.log(partner);



//Third Question
var date = document.getElementById('date').value;
	console.log(date);
	
//Fourth Question
var introduced = document.getElementById('introduced').value;
	console.log(introduced);
	
//Fifth Question
var hobby = document.getElementById('hobby').value;
	console.log(hobby);
	
//First Anatomy Question
var visage = document.getElementById('visage').value;
	console.log(visage);

//Appearance Question
var appearance = document.getElementById('appearance').value;
	console.log(appearance);

//Limb Question
var limb = document.getElementById('limb').value;
	console.log(limb);
	
//Radio Question
var seas = document.querySelector('input[name="sizes"]:checked').value;
console.log(seas);
	
var seasMessage;
	
if(seas=="small"){
	seasMessage = "You got this!";
}else if(seas=="medium"){
	seasMessage = "Keep Going!";
}else if(seas=="large"){
	seasMessage = "Never Give up!";	 
}
	
console.log(seasMessage);

document.getElementById('nameOutput').innerHTML = userName;	
	
//Image src
document.getElementById('picOutput').innerHTML = "<img class='img-fluid' src='images/urGood.jpg' alt='solving'>";

//Congrats! username "+userName+"

document.getElementById('storyOutput').innerHTML = "ADVENTURES OF "+userName+" Adventure I A SCANDAL IN BOHEMIA I O "+userName+" seldom heard "+partner+" mention her under any other name."+partner+" eyes "+seasMessage+ "she eclipses and predominates the whole of her sex."+partner+" felt any emotion akin to love Irene Adler. Emotions, and that one particularly, were abhorrent to "+partner+" cold, precise, but admirably balanced mind. "+partner+" was, I take it, the most perfect reasoning and observing machine that the world has seen; but, as a lover, "+partner+" would have placed "+userName+" in a false position. "+partner+" never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from "+partner+" motives and actions. But for the trained reasoner to admit such intrusions into "+partner+" own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all "+partner+" mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to "+partner+", and that woman was the late Irene Adler, of dubious and questionable memory. I had seen little of "+partner+" lately. My "+hobby+" had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the "+partner+" who first finds master of establishment, were sufficient to absorb all my attention; "+partner+", who loathed every form of society with "+partner+" whole Bohemian soul, remained in our lodgings in "+introduced+", buried among old books, and alternating from "+date+" to week between cocaine and ambition, the drowsiness of the drug, and the fierce energy of ones keen nature. "+partner+" was still, as ever, deeply attracted by the study of crime, and occupied his immense faculties and extraordinary powers of observation in following out those clues, and clearing up those mysteries, which had been abandoned as hopeless by the official police. From time to time I heard some vague account of "+partner+" doings: of summons to Odessa in the case of the Trepoff murder, of "+partner+" clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which had accomplished so delicately and successfully for the reigning family of Holland. Beyond these signs of "+partner+" activity, however, which I merely shared with all the readers of the daily press, I knew little of my former friend and companion. One night—it was on the "+date+"—I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through "+partner+". As I passed the well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see "+partner+" again, and to know how "+partner+" was employing their extraordinary powers. "+partner+" rooms were brilliantly lit, and, even as I looked up, I saw his "+visage+", "+seasMessage+" figure pass twice in a dark silhouette against the blind."+partner+"  was pacing the room swiftly, eagerly, with his "+limb+" sunk upon his "+appearance+" and his "+limb+" clasped behind him. To me, who knew "+partner+" every mood and habit, "+partner+" attitude and manner told their own story. "+partner+" was at work again. "+partner+" had arisen out of his drug-created dreams, and was hot upon the scent of some new problem. I rang the bell, and was shown up to the chamber which had formerly been in part my own.";
}
