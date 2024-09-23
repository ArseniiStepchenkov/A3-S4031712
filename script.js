function transition() {
	document.getElementById("Black").style.opacity="1";
	document.getElementById("Black").style.width="105vw";
	document.getElementById("Black").style.height="105vh";
	document.getElementById("Scanner").style.animation="scanning 0.5s linear 6";
	document.getElementById("ID-Card").style.width="100vw";
	document.getElementById("ID-Card").style.height="100vh";
	setTimeout(function(){
		const textProcessing = document.getElementById("Processing-Text");
		textProcessing.textContent = "DONE";
	}, 3000);
	setTimeout(function(){
		const idCard = document.getElementById("ID-Card");
		const textProcessing = document.getElementById("Processing-Text");
		const firstName = document.getElementById("first");
		const firstNameInput = document.getElementById("First-Name").value;
		const secondName = document.getElementById("second");
		const secondNameInput = document.getElementById("Second-Name").value;
		const timeVal = document.getElementById("time");
		const timeValInput = document.getElementById("Time").value;
		const purposeVar = ["Check-Up", "Surgery", "Guest", "Work", "Intern"];
		const purposeSpec = purposeVar[Math.floor(Math.random()*5)];
		const purposeText = document.getElementById("purpose");
		textProcessing.style.opacity="0";
		idCard.style.opacity="1";
		purposeText.textContent = purposeSpec;
		if (firstNameInput !== ""){
			firstName.textContent = firstNameInput;
		};
		if (secondNameInput !== ""){
				secondName.textContent = secondNameInput;
		};
		if (timeValInput !== ""){
				timeVal.textContent = timeValInput;
		};
	}, 4000);
	setTimeout(function(){
		const procceedButton = document.getElementById("Procceed");
		procceedButton.style.opacity="1";
		procceedButton.style.width="222px";
	}, 4000)
};

function clean(){
	document.getElementById("First-Name").value = "";
	document.getElementById("Second-Name").value = "";
	document.getElementById("Time").value = ""
}

function procceed(){
	document.getElementById("ID-Card").style.width="0vw";
	document.getElementById("ID-Card").style.height="0vh";
	document.getElementById("ID-Card").style.opacity="0";
	document.getElementById("ID-Card").style.transition="all 0s linear";
	document.getElementById("Procceed").style.opacity="0";
	document.getElementById("Procceed").style.width="0px";
	document.getElementById("Monolog").style.opacity="1";
};

function hide(){
	document.getElementById("Hide").style.opacity="0";
	document.getElementById("True").style.opacity="0";
	document.getElementById("Monolog-Text").textContent="Don't suppress yourself"
	window.setTimeout(function(){
		window.location.reload();
	}, 3000)
};

function truth(){
	document.getElementById("Hide").style.opacity="0";
	document.getElementById("True").style.opacity="0";
	document.getElementById("Monolog-Text").textContent="Behind bureaucracy we forget who we truly are.";
	setTimeout(function(){
		const text = document.getElementById("Monolog-Text");
		text.textContent = "";
		window.location.href = "camera.html";
	}, 3000)
};
