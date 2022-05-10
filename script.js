let discordShown = false;

function revealDiscord() {
	if (discordShown === false) {
		document.getElementById("discordButton").innerHTML = "Inqz#9999";
		discordShown = true;
	} else {
		document.getElementById("discordButton").innerHTML = "Discord";
		discordShown = false;
	}
}
