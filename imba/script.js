$(document).ready(function(){

    $(".current-lang").on("click", function(){
        if($(".dropdown").is(":visible")){
            $(".dropdown").hide();
        } else {
            $(".dropdown").show();
        }
    });

    $(".lang").on("click", function(){
        var lang = $(this).text();
        
        $(".current-lang").text(lang);
        $(".dropdown").hide();
    });
        var clicks = 5;
        $(".button .count").text(clicks);
        $(".button").on("click", function(){
         if (clicks>0){
             r1.roulette("start");
             r2.roulette("start");
             r3.roulette("start");

             clicks=clicks-1;
             $(".button .count").text(clicks);
         }

        });

        var r1=$(".roulette1");
        var r2=$(".roulette2");
        var r3=$(".roulette3");
        var init=function(number){
            var option={
                speed:10,
                duration:1
            
            };
            var onStop={
                stopCallback:function(){
                    init(clicks);
                    if (clicks==2){
                        $(".taste1").addClass("selected");
                    
                    }
                    if (clicks==0){
                        $(".taste2").addClass("selected");
                        $(".congratulations").show();
                    }
                }
            }
            if (number==5){
                r1.roulette({...option,...onStop,stopImageNumber:0});
                r2.roulette({...option,stopImageNumber:0});
                r3.roulette({...option,stopImageNumber:0});
            }
            if (number==3){
                r1.roulette("option", {...option,...onStop,stopImageNumber:0});
                r2.roulette("option", {...option,stopImageNumber:1});
                r3.roulette("option", {...option,stopImageNumber:2});

            }
            if (number==2){
                r1.roulette("option", {...option,...onStop,stopImageNumber:0});
                r2.roulette("option", {...option,stopImageNumber:0});
                r3.roulette("option", {...option,stopImageNumber:0});
            }
            if (number==1){
                r1.roulette("option", {...option,...onStop,stopImageNumber:2});
                r2.roulette("option", {...option,stopImageNumber:0});
                r3.roulette("option", {...option,stopImageNumber:1});
            }
        }
      init(clicks); 


});
