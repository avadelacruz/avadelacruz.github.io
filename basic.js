var links;
var lightModeOn;

// on page load
$(function(){
  //set active link color for current page
  var navbar = document.getElementById("site-nav-bar");
  links = navbar.getElementsByTagName("li");
  // alert(window.location.pathname);
  var pattern = new RegExp("[^/]+$");
  var page = pattern.exec(window.location.pathname);
  $('ul li a').each(function() {
    if($(this).attr("href")===page[0]){
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
  darkModeOn = this.checked;
  if(darkModeOn){
    //turn on light mode
    document.getElementById("light-css").disabled = false;
    document.getElementById("dark-css").disabled = true;
  }
  else{
    //turn on dark mode
    document.getElementById("light-css").disabled = true;
    document.getElementById("dark-css").disabled = false;
  }
})
