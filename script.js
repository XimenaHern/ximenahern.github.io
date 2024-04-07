console.log("scriptsLoaded");

var list = ["apples", "oranges", "grapes"];

var count = list.length;


for(var i = 0; i < count; i++){
    console.log(i);
    console.log(list[i])
}

var creditTurnIn = true;
var testToTake = false;

if(creditTurnIn || testToTake){
    console.log("go to campus!")
}

var e = $("body");
console.log(e);

var e = $("#Hero .button");
/*e.css("font-size", "30px");
e.css("background-color", "blue");*/
console.log(e.width());


$("#contactBtn").click(function(){
   $(".contact-content").toggle("slow") ;
});
$("#skillBtn").click(function(){
   $(".skill-content").toggle("slow") ;
});
$("#clubBtn").click(function(){
   $(".club-content").toggle("slow") ;
});
$("#eduBtn").click(function(){
   $(".edu-content").toggle("slow") ;
});
$("#awardBtn").click(function(){
   $(".award-content").toggle("slow") ;
});
$("#hobBtn").click(function(){
   $(".hob-content").toggle("slow") ;
});

$(".skill-bar").ready(function(){
    $("#communication").animate({width: "120px"}, 800);
    $("#responsibility").animate({width: "120px"}, 800);
    $("#teamwork").animate({width: "105px"}, 800);
    $("#problem-solving").animate({width: "120px"}, 800);
    $("#creativity").animate({width: "105px"}, 800);
});
