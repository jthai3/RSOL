var randomAttacker = document.getElementById("ranmAtk");
var randomDefender = document.getElementById("ranDef");
var operatorNumber = document.getElementById("num0");
var primaryNumber = document.getElementById("num1");
var secondaryNumber = document.getElementById("num2");
var gadgetNumber = document.getElementById("num3");
var loadoutNumbers = document.getElementById("ranBtns");

loadoutNumbers.addEventListener("click", function () {
	var primNum;
	var secNum;
	var gadgNum;

	function randoNums(max) {
		return Math.floor(Math.random() * Math.floor(max) + 1);
	}

	primNum = randoNums(3);
	if (primNum == 3) {
		primaryNumber.innerHTML = primNum + " || " + randoNums(2);
	} else {
		primaryNumber.innerHTML = primNum;
	}

	secNum = randoNums(3);
	if (secNum == 3) {
		secondaryNumber.innerHTML = secNum + " || " + randoNums(2);
	} else {
		secondaryNumber.innerHTML = secNum;
	}

	gadgNum = randoNums(3);
	if (gadgNum == 3) {
		gadgetNumber.innerHTML = gadgNum + " || " + randoNums(2);
	} else {
		gadgetNumber.innerHTML = gadgNum;
	}
});

function displayAttacker() {
	var attackerArray = [
		"Sledge",
		"Thatcher",
		"Ash",
		"Thermite",
		"Twitch",
		"Montagne",
		"Glaz",
		"Fuze",
		"Blitz",
		"IQ",
		"Buck",
		"Blaclbeard",
		"Capitao",
		"Hibana",
		"Jackal",
		"Ying",
		"Zofia",
		"Dokkaebi",
		"Lion",
		"Finka",
		"Maverick",
		"Nomad",
		"Gridlock",
		"Nokk",
		"Amaru",
		"Kali",
		"Iana",
		"Ace",
		"Zero",
		"Flores",
		"Osa",
		"Sens",
		"Grim",
		"Brava",
	];

	var randomNumber =
		attackerArray[Math.floor(Math.random() * attackerArray.length)];
	operatorNumber.innerHTML = randomNumber;
}

function displayDefender() {
	var defenderArray = [
		"Smoke",
		"Mute",
		"Castle",
		"Pulse",
		"Doc",
		"Rook",
		"Kapkan",
		"Tachanka",
		"Jager",
		"Bandit",
		"Frost",
		"Valkyrie",
		"Caveria",
		"Echo",
		"Mira",
		"Lesion",
		"Ela",
		"Vigil",
		"Maestro",
		"Alibi",
		"Clash",
		"Kaid",
		"Mozzie",
		"Warden",
		"Goyo",
		"Wamai",
		"Oryx",
		"Melusi",
		"Aruni",
		"Thunderbird",
		"Thorn",
		"Azami",
		"Solis",
		"Fenrir",
	];

	var randomNumber =
		defenderArray[Math.floor(Math.random() * defenderArray.length)];
	operatorNumber.innerHTML = randomNumber;
}
