var ran_num,color=["red","blue","green","yellow"],game_pat=[],user_pat=[],level=0,started=0;function playSound(e){$("#"+e).click(function(){new Audio("sounds/"+e+".mp3").play()})}function animatePress(e){$("#"+e).addClass("pressed"),setTimeout(function(){$("#"+e).removeClass("pressed")},100)}function nextSequence(){user_pat=[],$("#level-title").text("Level "+level),ran_num=Math.floor(4*Math.random());var e=color[ran_num];game_pat.push(e),$("#"+e).fadeOut(250).fadeIn(250),playSound(e),level++}function reset(){level=0,game_pat=[],started=0}function check(e){game_pat[e]===user_pat[e]?(console.log("success"),user_pat.length===game_pat.length&&setTimeout(function(){nextSequence()},1e3)):(new Audio("sounds/wrong.mp3").play(),$("#level-title").text("Game Over, Press Any Key to Restart"),$("body").addClass("game-over"),setTimeout(function(){$("body").removeClass("game-over")},200),reset())}$(".btn").click(function(){var e=$(this).attr("id");playSound(e),animatePress(e),user_pat.push(e),check(user_pat.length-1)}),$("body").keydown(function(){0==started&&(started=1,$("#level-title").text("Level "+level),nextSequence())});