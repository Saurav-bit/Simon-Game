var color=["red","blue","green","yellow"];
var game_pat=[];
var user_pat=[];
var ran_num;
var level=0;
var started=0;

// plays sound
function playSound(name)
{
    // console.log(name);
    $("#"+name).click(function(){
        var audio=new Audio("sounds/"+name+".mp3");
        audio.currentTime=0;
        audio.play();
        
    })

}

//borders 
function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);

}
 //generate next
function nextSequence()
{
    user_pat=[];
    
    
    $("#level-title").text("Level "+ level);

    ran_num=Math.floor(Math.random()*4);
    var ran_col=color[ran_num];
    game_pat.push(ran_col);
    // console.log(ran_num);
    $("#"+ran_col).fadeOut(250).fadeIn(250);
    playSound(ran_col);
    // $("#"+ran_col).click(function(){
    //     var audio=new Audio("sounds/"+$(this).attr('id')+".mp3");
    //     audio.play();
    // })
    level++;
    
}
// nextSequence();

// pat.push(ran_col);
// console.log(pat);
// console.log($("#"+ran_col));
// setInterval(()=>{
//     $("#"+ran_col).fadeIn(250);
//     $("#"+ran_col).fadeOut(250);
// },1000);
$(".btn").click(function(){
    // console.log(this.attributes.id);
    var user_clicked=$(this).attr("id");//id of the clicked button
    playSound(user_clicked); //makes sound
    animatePress(user_clicked); //animates
    user_pat.push(user_clicked); //adds in game pattern
    check(user_pat.length-1)
    // console.log(pat);
    

});


//  reset values to restart game
function reset()
{
    
    level=0;
    game_pat=[];
    started=0;
    
}

//checks if the user input same as game

function check(level)
{
    if(game_pat[level]===user_pat[level])
    {
        console.log("success");
        if(user_pat.length===game_pat.length)
        {
                setTimeout(function(){
                nextSequence();
                },1000);
        }
    }
    else
    {
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("#level-title").text("Game Over, Click here to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        reset();


        //console.log("wrong");
    }
}


//game starts here for key events
$("#level-title").click(function(){
if(started!=0)
{
    return;
}
else
{
    started=1;
    $("#level-title").text("Level "+ level);
    nextSequence();

}
});