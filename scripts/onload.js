function setActiveLinkColor() {
	console.log("hi");
	//set active link color for current page
	var pagePattern = new RegExp("([^/]+)(?=[^/]*/?$)");
	var page = pagePattern.exec(window.location.pathname);
	if (page == null) {
		localStorage["current-page-name"] = "";
	} else {
		localStorage["current-page-name"] = page[0];
	}

	$("ul li a").each(function() {
		console.log($(this).attr("href"));
		let linkPattern = new RegExp("[^/.]+");
		let linkName = linkPattern.exec($(this).attr("href"));
		console.log(linkName);
		if (
			linkName !== null &&
			linkName[0] === localStorage["current-page-name"]
		) {
			// console.log("TRUE!!!");
			// if (localStorage["current-stylesheet"] === "dark-css") {
			$(this).addClass("active");
			// } else {
			// 	$(this).css("color", "#D77771");
			// }
		}
	});
}

//on doc load
$(function() {
	//set dark mode on load if previously chosen

	setActiveLinkColor();
	//if user chose dark theme previously, apply dark theme
	if (localStorage["current-stylesheet"] === "dark-css") {
		// $("#theme").attr("href", "../styles/dark.css");

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
