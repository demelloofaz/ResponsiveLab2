$(document).ready(function(){
    $(".team-list").mouseenter(function(){
        $(this).css("color", "black");
    });
    $(".team-list").mouseleave(function(){
        $(this).css("color", "red");
    });
});
