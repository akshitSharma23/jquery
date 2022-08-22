function rand(){
    return Math.floor(Math.random()*4);
}
function addcolor(){
    var n=rand();
    $("#"+color[n]).fadeOut(100).fadeIn(100);
    sound(color[n]);
    A1.push(color[n]);
    $("h1").html("level "+A1.length);
    A2=[];
}
function wrong(){
    // alert("wrong anwer");
    $("body").addClass("game-over");
    $("h1").html("press any key to restart");
    sound("wrong");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    A1=[]
    start=true;
}
function check(n){
    if(A1[n]==A2[n]){
        if(A1.length==A2.length){
            addcolor();
        }
    }
    else{
        wrong();
    }
}
function press(k){
    $(k).addClass("pressed");
    setTimeout(function(){
        $(k).removeClass("pressed");
    },100)
}
function sound(k){
    var aud=new Audio("sounds/"+k+".mp3");
    aud.play();
}




var color=["green","red","yellow","blue"];
var A1=[];
var A2=[];
var start=true;
$(document).on("keydown",function(){
    if(start==true){
        start=false;
        addcolor();
    }
});
$(".btn").on("click",function(){
    A2.push(this.id);
    sound(this.id);
    press("#"+this.id);
    check(A2.length-1);
})