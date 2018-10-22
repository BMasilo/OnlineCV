$(document).ready(function(){
    $("#MyName").animate({
      right: $('#MyName').parent().width() / 2 - $('#MyName').width() / 2
    }, 3000);

    function myFunction() {
    var x = document.getElementsByClassName('dropdownContent');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$('#dimScreen').bind('animationend webkitAnimationEnd oAnimationEnd',
function(e){
  $(this).remove();
});
});
