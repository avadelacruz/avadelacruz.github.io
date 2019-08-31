function turnOnDarkMode(){
  $("#theme").attr("href", "dark.css");
  localStorage["current-stylesheet"] = "dark-css";
  //if on dark mode and on resume page, load dark resume
  if(localStorage["current-page-name"]=="resume.html"){
    $("#resume-picture").attr("src", "DeLaCruz_Ava_Dark.jpeg");
  }
}


function turnOnLightMode(){
  $("#theme").attr("href", "light.css");
  localStorage["current-stylesheet"] = "light-css";
  if(localStorage["current-page-name"]=="resume.html"){
    $("#resume-picture").attr("src", "DeLaCruz_Ava.jpeg");
  }
}


function changeTheme(lightModeWasOn){
  lightModeWasOn ? turnOnDarkMode() : turnOnLightMode();
}



$("#site-nav-bar").on("click", function(){

});


$("#slider").change(function(){
  //box goes from checked->unchecked as user goes from light->dark mode
  changeTheme(this.checked);
});
