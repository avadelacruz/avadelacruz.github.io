var links;
var lightModeOn;
var currentPageName;

// on page load
$(function(){
  //set active link color for current page
  var navbar = document.getElementById("site-nav-bar");
  links = navbar.getElementsByTagName("li");
  // alert(window.location.pathname);
  var pattern = new RegExp("[^/]+$");
  var page = pattern.exec(window.location.pathname);
  currentPageName = page[0];
  $('ul li a').each(function() {
    if($(this).attr("href")===currentPageName){
      $(this).css("color", "#D77771");
    }
    else{
      // $(this).css("color", "black");
    }
  });
});


$("#slider").change(function(){
  //slider will default to checked, but on first change will be unchecked
  //box goes from checked->unchecked as user goes from light->dark mode
  lightModeOn = this.checked;
  if(lightModeOn){
    //turn on dark mode
    document.getElementById("light-css").disabled = true;
    document.getElementById("dark-css").disabled = false;
    //if on dark mode and on resume page, load dark resume
    if(currentPageName=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava_Dark.jpeg");
    }
  }
  else{
    //turn on light mode
    document.getElementById("light-css").disabled = false;
    document.getElementById("dark-css").disabled = true;
    if(currentPageName=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava.jpeg");
    }  
  }
})
