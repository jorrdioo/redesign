$(function(){

    /*
        navigation interactions
        menu toggler
        dropdown toggler
    */
   
    // Menu Toggler
    //1. listen for a click on navbar toggler
    //2. store the property in the attribute "data-target"
    //3. use the attribute's value to select the nav it wants to affect
    $(".navbar-toggler").on("click", function(){
        let toggler = $(this).attr("data-target");
        $(toggler).toggleClass("open");
    })


    //Dropdown Toggler
    //1. listen for clon on .dropdown > a
    //2. toggle the class of "open"
    $(".navbar .dropdown > a").on("click", function(e){
        e.preventDefault();
        $(this).parent().toggleClass("open");
    })

})