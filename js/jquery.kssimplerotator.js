(function( $ ){
  var defaults = {time: 3000, transition: 'fade'};
  var images, currentRotator = 0, t, itemCount;
  $.fn.simpleRotator = function(options) {
    options = $.extend({}, defaults, options);
    images = this.children();
    itemCount = images.length;
    images.css("display","none");
    $(images[currentRotator]).css("display","block");
    t = setTimeout("$().cycleRotator(" + options.time + ", '" + options.transition + "')", options.time);
    return this;
  };
  $.fn.cycleRotator = function(time, transition) {
	var oldOne = $(images[currentRotator]);
	currentRotator = (currentRotator + 1) % itemCount;
  switch(transition)
  {
    case "fade":
      $(images[currentRotator]).fadeIn("fast");
      oldOne.css("display","none");
      break;
    case "slide":
      $(images[currentRotator]).slideDown("1000");
      oldOne.slideUp("1000");
      break;
    default:
      break;
  }
	t = setTimeout("$().cycleRotator(" + time + ", '" + transition + "')", time);
  };

})( jQuery );