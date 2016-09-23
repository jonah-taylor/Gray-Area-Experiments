//Changes header title opacity to .5
$(function () {
	$("#header-title").css("opacity", "0.5");
});

//Makes by rusty button change the header title
$(function () {
	$("a#button").click(function () {
		$("h1#header-title").text("By Rusty!!!!!!!");
	});
});

//Iterates over list items with change in opacity and color gradient 
var listItems = $("li");

$(function () {

	var listItems = $("li");
	var red = 150;
	for (var index = 1; index <= listItems.length; index++) {
		var indexAsString = index.toString();
		var opacity = (index / 10).toString();
		var rgb = "rgb(" + red.toString() + ",100,255)"
		$("#list-" + indexAsString).css("color", rgb);
		$("#list-" + indexAsString).css("opacity", opacity);
		red += 25;
	}
});