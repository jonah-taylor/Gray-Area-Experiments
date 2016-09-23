//Changes Header Title opacity to .5
//$(function(){
//	$("#header-title").css("opacity","0.5");
//}); 

//Makes By Rusty button change the Header Title
// $(function(){
//            $("a#button").click(function(){
//                $("h1#header-title").text("By Rusty!!!!!!!");
//            });            
//        });

//let start at index 0 
//if index < length
//do the stuff
//then index++

var listItems = $("li");

$(function(){
	
	var listItems = $("li");
	var red = 150;
	for (var index = 1; index <= listItems.length; index++ ) {
		var indexAsString = index.toString();		
		var opacity = (index/10).toString();
		var rgb = "rgb(" + red.toString() + ",100,255)"
		$("#list-" + indexAsString).css( "color", rgb );
		$("#list-" + indexAsString).css( "opacity", opacity );
		red += 25;
	}
});
  
//  $(function(){	
//	for (var index = 0; index < 0; index++ ) {
//		
//	}
//});