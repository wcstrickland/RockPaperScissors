function rpsResult(player, computer) {
	const relationships = {
		rock: { rock: "tie", paper: "lose", scissors: "win" },
		paper: { rock: "win", paper: "tie", scissors: "lose" },
		scissors: { rock: "lose", paper: "win", scissors: "tie" },
	};
	const validChoices = ["rock", "paper", "scissors"];
	if (validChoices.includes(player.toLowerCase())) {
		return relationships[player][computer];
	} else return "invalid input";
}

function rps(player) {
	const imgs = document.querySelectorAll("img");
	for (let img of imgs) {
		if (img.slid) {
			img.style.transform = unslide(img);
		}
	}
	let header = document.querySelector("h1").innerText;
	const headings = {
		Rock: "Paper",
		Paper: "Scissors",
		Scissors: "Shoot",
		Shoot: "Rock",
		"Rock Paper Scissors...": "Shoot",
	};

	let newHeading = headings[header];
	document.querySelector("h1").innerText = newHeading;

	const validChoices = ["compRock", "compPaper", "compScissors"];
	const evalChoices = ["rock", "paper", "scissors"];
	let randNum = Math.floor(Math.random() * 3);
	let randChoice = validChoices[randNum];
	let randEvalChoice = evalChoices[randNum];
	const playerButton = document.querySelector(`#${player}`);
	const compButton = document.querySelector(`#${randChoice}`);
	const playerPlace = document.querySelector("#playerPlace");
	const compPlace = document.querySelector("#compPlace");
	playerButton.style.transform = slideButton(playerButton);
	compButton.style.transform = slideButton(compButton);
	playerButton.slid = true;
	compButton.slid = true;
	result = rpsResult(player, randEvalChoice);
	if (result === "win") {
		playerPlace.style.backgroundColor = "#6bb96b";
		compPlace.style.backgroundColor = "#b96b6b";
		playerPlaceImg.style.display = "none";
		compPlaceImg.style.display = "none";
	} else if (result === "lose") {
		playerPlace.style.backgroundColor = "#b96b6b";
		compPlace.style.backgroundColor = "#6bb96b";
		playerPlaceImg.style.display = "none";
		compPlaceImg.style.display = "none";
	} else {
		playerPlace.style.backgroundColor = "#808080";
		compPlace.style.backgroundColor = "#808080";
		playerPlaceImg.style.display = "none";
		compPlaceImg.style.display = "none";
	}
}

function slideButton(button) {
	if (button.id === "rock") return "translate(23vw, -20vh)";
	if (button.id === "paper") return "translateY(-20vh)";
	if (button.id === "scissors") return "translate(-23vw, -20vh)";
	if (button.id === "compRock") return "translate(23vw, 20vh)";
	if (button.id === "compPaper") return "translateY(20vh)";
	if (button.id === "compScissors") return "translate(-23vw, 20vh)";
}

function unslide(button) {
	if (button.id === "rock") return "translate(1vw, 1vh)";
	if (button.id === "paper") return "translateY(1vh)";
	if (button.id === "scissors") return "translate(1vw, 1vh)";
	if (button.id === "compRock") return "translate(-1vw, -1vh)";
	if (button.id === "compPaper") return "translateY(-1vh)";
	if (button.id === "compScissors") return "translate(1vw, -1vh)";
}
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
	rps("rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
	rps("paper");
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
	rps("scissors");
});
