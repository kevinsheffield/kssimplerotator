(function( $ ){
  var defaults = {time: 3000};
  var images, currentRotator = 0, t, itemCount;
  $.fn.simpleRotator = function(options) {
    options = $.extend({}, defaults, options);
    images = this.children();
    itemCount = images.length;
    images.css("display","none");
    $(images[currentRotator]).css("display","block");
    t = setTimeout("$().cycleRotator(" + options.time + ")", options.time);
    return this;
  };
  $.fn.cycleRotator = function(time) {
	var oldOne = $(images[currentRotator]);
	currentRotator = (currentRotator + 1) % itemCount;
	$(images[currentRotator]).fadeIn("fast");
	oldOne.css("display","none");
	t = setTimeout("$().cycleRotator(" + time + ")", time);
  };

})( jQuery );