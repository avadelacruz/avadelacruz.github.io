function turnOnDarkMode() {
	localStorage["current-page-name"] == "index.html"
		? $("#theme").attr("href", "./styles/dark.css")
		: $("#theme").attr("href", "../styles/dark.css");
	localStorage["current-stylesheet"] = "dark-css";
	//if on dark mode and on resume page, load dark resume
	if (localStorage["current-page-name"] == "resume.html") {
		$("#resume-picture").attr("src", "../images/DeLaCruz_Ava_Dark.jpeg");
	}
}

function turnOnLightMode() {
	localStorage["current-page-name"] == "index.html"
		? $("#theme").attr("href", "./styles/light.css")
		: $("#theme").attr("href", "../styles/light.css");

	localStorage["current-stylesheet"] = "light-css";
	if (localStorage["current-page-name"] == "resume.html") {
		$("#resume-picture").attr("src", "../images/DeLaCruz_Ava.jpeg");
	}
}

function changeTheme(lightModeWasOn) {
	lightModeWasOn ? turnOnDarkMode() : turnOnLightMode();
}

$("#slider").change(function() {
	//box goes from checked->unchecked as user goes from light->dark mode
	changeTheme(this.checked);
});
