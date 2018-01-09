jQuery(document).ready(function($) {
	var imgFilePrefix = "../resources/doreen_pronounce_skills/发音技巧"
	var currentIndex = 1
	var maxIndex = 20;
	function changeTitle (currentIndex) {
		// 变化文档的title
		document.title = "SpeakLoudly: " + currentIndex + "/" +  maxIndex
	}
	changeTitle(currentIndex)

	// 通过索引号获得图片地址
	function getImgDirFromIdx (idx) {
		var imgFileSuffix = ".jpg"
		return imgFilePrefix + idx + imgFileSuffix
	}
	// 获取音频地址
	function getAudioDirFromIdx (idx) {
		var audioFileSuffix = ".mp3"
		return imgFilePrefix + idx + audioFileSuffix	
	}
	// 预加载下面两张图片
	function preloadImg (loadIdx) {
		var imgObj = new Image()
		$(imgObj).on('load error', function() {
			if (loadIdx - currentIndex >= 2)
			{
				return
			}
			else
			{	
				// 加载下一张图片
				preloadImg(loadIdx + 1)	
			}
		});
		imgObj.src = getImgDirFromIdx(loadIdx)
		// setTimeout(function () {imgObj.src = getImgDirFromIdx(loadIdx)}, 1000)
	}
	// 着陆面，默认加载前三张图片
	preloadImg(currentIndex + 1)

	$("button#next").click(function(event) {
		// change img
		if (++currentIndex > maxIndex) {
			alert("No more pictures!!!")
			currentIndex--
			return
		}
		var nextImg = getImgDirFromIdx(currentIndex)
		var nextAudio = getAudioDirFromIdx(currentIndex)
		// 加载后面的图片
		preloadImg(currentIndex + 1)
		
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
		changeTitle(currentIndex)
	});

	$("button#pre").click(function(event) {
		// change img
		if (--currentIndex < 1) {
			alert("This is the first picture!!!")
			currentIndex++
			return
		}
		var preImg = getImgDirFromIdx(currentIndex)
		var preAudio = getAudioDirFromIdx(currentIndex)
		$("img#contentImg").attr({
			"src": preImg,
		});
		// change audio
		$("source#audio_src").attr({
			"src": preAudio,
		});
		// reload audio
		$("audio#pronounce_audio")[0].load();
		changeTitle(currentIndex)
	});
});