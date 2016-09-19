//Changes Header Title opacity to .5
$(function(){
	$("#header-title").css("opacity","0.5");
}); 

//Makes By Rusty button change the Header Title
 $(function(){
            $("a#button").click(function(){
                $("h1#header-title").text("By Rusty!!!!!!!");
            });            
        });