var links;

// on page load
$(function(){
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
      $(this).css("color", "black");
    }
  });

});




// $("#site-nav-bar").click(function(){
//
//   // for(var i=0; i<links.length; i++){
//     // $(this).html("hi");
//
//
//
//   }
//
// });
