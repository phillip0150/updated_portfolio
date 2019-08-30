var navBar = false;
$("#navMenu").hide();

$( document ).ready(function() {
    $(".navbar-burger").click(function(){
        if(navBar===false){
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
            navBar = true;
        }
        else if(navBar===true){
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
            navBar = false;
        }

    });
    
  
  $(".image-projects").hover(function(){
    //On Hover - Works on ios
    $(".overlay").show();
  }, function(){
    //Hover Off - Hover off doesn't seem to work on iOS
    $(".overlay").show();
 });
});
