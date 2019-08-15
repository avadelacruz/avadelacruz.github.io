<<<<<<< HEAD
function setActiveLinkColor(){
=======
function setActiveLink(){
>>>>>>> 87598569e21280b5c6bafb49556d214c4c652e77
  //set active link color for current page
  var navbar = document.getElementById("site-nav-bar");
  var links = navbar.getElementsByTagName("li");
  var pattern = new RegExp("[^/]+$");
  var page = pattern.exec(window.location.pathname);
  localStorage["current-page-name"] = page[0];
  $('ul li a').each(function() {
    if($(this).attr("href")===localStorage["current-page-name"]){
<<<<<<< HEAD
      if(localStorage["current-stylesheet"]==="dark-css"){
        $(this).css("color", "#f0a39e");
      }
      else {
        $(this).css("color", "#D77771");
      }
=======
      if(localStorage["current-stylesheet"]==="light-css"){
        $(this).css("color", "#D77771");
      }
      else{
        $(this).css("color", "#f0a39e");
      }
>>>>>>> 87598569e21280b5c6bafb49556d214c4c652e77
    }
  });
}


//on doc load
$(function(){
<<<<<<< HEAD
=======

>>>>>>> 87598569e21280b5c6bafb49556d214c4c652e77
  //if user chose dark theme previously, apply dark theme
  if(localStorage["current-stylesheet"]==="dark-css"){
    $("#slider").prop("checked", true);
    document.getElementById("dark-css").disabled = false;
    document.getElementById("light-css").disabled = true;
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava_Dark.jpeg");
    }
  }
  else{ //if user chose light theme previously, apply light theme
    document.getElementById("light-css").disabled = false;
    document.getElementById("dark-css").disabled = true;
    $("#slider").prop("checked", false);
    if(localStorage["current-page-name"]=="resume.html"){
      $("#resume-picture").attr("src", "DeLaCruz_Ava.jpeg");
    }
  }

<<<<<<< HEAD
  setActiveLinkColor();
=======
  setActiveLink();
>>>>>>> 87598569e21280b5c6bafb49556d214c4c652e77

});
