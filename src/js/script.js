jQuery(document).ready(function($) {
	var imgFilePrefix = "../resources/doreen_pronounce_skills/发音技巧"
	var imgFileSuffix = ".jpg"
	var currentIndex = 1
	var maxIndex = 20;

	$("button#next").click(function(event) {
		var nextImg = imgFilePrefix + ++currentIndex + imgFileSuffix
		if (currentIndex > maxIndex) {
			alert("No more pictures!!!")
			currentIndex--
			return
		}
		$("img#contentImg").attr({
			"src": nextImg,
		});
	});

	$("button#pre").click(function(event) {
		var preImg = imgFilePrefix + --currentIndex + imgFileSuffix
		if (currentIndex < 1) {
			alert("This is the first picture!!!")
			currentIndex++
			return
		}
		$("img#contentImg").attr({
			"src": preImg,
		});
	});
});