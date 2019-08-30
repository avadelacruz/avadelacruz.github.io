$("#slider").change(function(){

  //slider will default to checked, but on first change will be unchecked
  //box goes from checked->unchecked as user goes from light->dark mode
  var lightModeOn = this.checked;
  if(lightModeOn){
    //turn on dark mode
    $("#theme").attr("href", "dark.css");
    //if on dark mode and on resume page, load dark resume
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava_Dark.jpeg");
    }
    localStorage["current-stylesheet"] = "dark-css";
  }
  else{
    //turn on light mode
    $("#theme").attr("href", "light.css");
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava.jpeg");
    }
    localStorage["current-stylesheet"] = "theme";
  }
});
