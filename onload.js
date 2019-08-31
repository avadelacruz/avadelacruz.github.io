
function setActiveLinkColor(){
  //set active link color for current page
  // var navbar = document.getElementById("site-nav-bar");
  // var links = navbar.getElementsByTagName("li");
  var pattern = new RegExp("[^/]+$");
  var page = pattern.exec(window.location.pathname);
  localStorage["current-page-name"] = page[0];
  $('ul li a').each(function() {
    if($(this).attr("href")===localStorage["current-page-name"]){
      if(localStorage["current-stylesheet"]==="dark-css"){
        $(this).css("color", "#f0a39e");
      }
      else {
        $(this).css("color", "#D77771");
      }
    }
  });
}


//on doc load
$(function(){

  setActiveLinkColor();
  //if user chose dark theme previously, apply dark theme
  if(localStorage["current-stylesheet"]==="dark-css"){
    $("html").css("background-color", "#141d26");
    $("#theme").attr("href", "dark.css");
    $("#slider").prop("checked", true);
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava_Dark.jpeg");
    }
  }
  else{ //if user chose light theme previously, apply light theme
    $("#slider").prop("checked", false);
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava.jpeg");
    }
  }

});
