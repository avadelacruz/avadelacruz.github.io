function setActiveLink() {
	var pagePattern = new RegExp("([^/]+)(?=[^/]*/?$)");
	var page = pagePattern.exec(window.location.pathname);
	if (page == null) {
		localStorage["current-page-name"] = "";
	} else {
		localStorage["current-page-name"] = page[0];
	}
	// if the current page matches a link in the nav bar, mark that link as active
	$("ul li a").each(function() {
		let linkPattern = new RegExp("[^/.]+");
		let linkName = linkPattern.exec($(this).attr("href"));
		if (
			linkName !== null &&
			linkName[0] === localStorage["current-page-name"]
		) {
			$(this).addClass("active");
		}
	});
}

$(function() {
	setActiveLink();
	//set dark mode on load if previously chosen
	if (localStorage["current-stylesheet"] === "dark-css") {
		localStorage["current-page-name"] == ""
			? $("#theme").attr("href", "./styles/dark.css")
			: $("#theme").attr("href", "../styles/dark.css");

		$("#slider").prop("checked", true);
		if (localStorage["current-page-name"] == "resume") {
			$("#resume-picture").attr("src", "../images/DeLaCruz_Ava_Dark.jpeg");
		}
	} else {
		//if user chose light theme previously, apply light theme
		$("#slider").prop("checked", false);
		if (localStorage["current-page-name"] == "resume") {
			$("#resume-picture").attr("src", "../images/DeLaCruz_Ava.jpeg");
		}
	}
});
