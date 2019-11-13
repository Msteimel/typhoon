// elements animation

$(".stagger-fade").children().addClass("stagger fade");

$(".stagger-fade-in").children().addClass("stagger fade");

$(".stagger-fade-up").children().addClass("stagger fade");

$(".stagger-fade-up-reverse").children().addClass("stagger fade");

$(".stagger-fade-down").children().addClass("stagger fade");

$(".stagger-fade-down-reverse").children().addClass("stagger fade");

$(".stagger-fade-left").children().addClass("stagger fade");

$(".stagger-fade-right").children().addClass("stagger fade");

var $window = $(window);

function check_if_in_view() {
	var $fade = $('.fade');

	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($fade, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position + 50 <= window_bottom_position)) {
			$element.addClass('in-view');
		}
	});

	$('.in-view').css({
		'opacity': '1', 
		'transform': 'translate(0, 0)', 
		'visibility': 'visible'
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$.get("https://iastate.libcal.com/1.1/equipment/locations", function (data) {
    $(".result").html(data);
    alert("Load was performed.");
});

