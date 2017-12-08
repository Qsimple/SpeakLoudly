jQuery(document).ready(function($) {
	var imgFilePrefix = "../resources/doreen_pronounce_skills/发音技巧"
	var imgFileSuffix = ".jpg"
	var audioFileSuffix = ".mp3"
	var currentIndex = 1
	var maxIndex = 20;

	$("button#next").click(function(event) {
		// change img
		var nextImg = imgFilePrefix + ++currentIndex + imgFileSuffix
		var nextAudio = imgFilePrefix + currentIndex + audioFileSuffix
		if (currentIndex > maxIndex) {
			alert("No more pictures!!!")
			currentIndex--
			return
		}
		// change img
		$("img#contentImg").attr({
			"src": nextImg,
		});
		// change audio
		$("source#audio_src").attr({
			"src": nextAudio,
		});
		// reload audio
		$("audio#pronounce_audio")[0].load();
	});

	$("button#pre").click(function(event) {
		var preImg = imgFilePrefix + --currentIndex + imgFileSuffix
		var preAudio = imgFilePrefix + currentIndex + audioFileSuffix
		if (currentIndex < 1) {
			alert("This is the first picture!!!")
			currentIndex++
			return
		}
		$("img#contentImg").attr({
			"src": preImg,
		});
		// change audio
		$("source#audio_src").attr({
			"src": preAudio,
		});
		// reload audio
		$("audio#pronounce_audio")[0].load();
	});
});