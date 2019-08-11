$(function(){
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

$("#slider").change(function(){
  //slider will default to checked, but on first change will be unchecked
  //box goes from checked->unchecked as user goes from light->dark mode
  var lightModeOn = this.checked;
  if(lightModeOn){
    //turn on dark mode
    document.getElementById("light-css").disabled = true;
    document.getElementById("dark-css").disabled = false;
    //if on dark mode and on resume page, load dark resume
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava_Dark.jpeg");
    }
    localStorage["current-stylesheet"] = "dark-css";
  }
  else{
    //turn on light mode
    document.getElementById("light-css").disabled = false;
    document.getElementById("dark-css").disabled = true;
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava.jpeg");
    }
    localStorage["current-stylesheet"] = "light-css";
  }
});
