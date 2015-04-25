$(document).ready(function() {
	$(".menuicon2").click(function() {
		$(".menu2").fadeIn();
	});

	$(".close").click(function() {
		$(".menu2").fadeOut();
	});

	$(".likes").click(function() {
		var id = $(".likes").attr("id");
		id = parseInt(id);
		var like = $(".likenum").text();
		like = parseInt(like);
		if (id != 0) {
			$.ajax({
				type : "POST",
				url : "/likeus/" + id,
			}).done(function(result) {
				like = like + 1;
				if (like < 10)
					like = '0' + like;
				$(".likenum").text(like);
				$(".likes").attr("id", "0");

			});
		}

	});

});
