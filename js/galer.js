jQuery(document).ready(function($) {
  
  function slide(e) {
    if (typeof e.data === 'undefined' || typeof e.data.left === 'undefined') {
      direction = 0;
    }
    else {
      direction = e.data.left;
    }
    
    var wrap = $('.sliderWrap');
    var wWidth = wrap.width();
    var content = $('.sliderContent');
    var cWidth = content.width();
    var left = parseFloat(content.css('left'));
    var items = content.find('li');
    var iWidth = items.eq(1).position().left - items.eq(0).position().left;
    var pos;
    
    var moveBy = Math.max(1, Math.floor(wWidth / iWidth)) * iWidth;
    if (direction == 1) { // Moving Left
      if (Math.abs(left) == cWidth - wWidth) {
        pos = 0; // Fly to start of list if we've reached the end
      }
      else {
        pos = left - moveBy;
        pos = Math.min((cWidth - wWidth), Math.abs(pos)) * Math.sign(pos);
      }
    }
    else {
      if (left == 0) {
        pos = -(cWidth - wWidth); // Fly to end of list
      }
      else {
        pos = left + moveBy;
        pos = Math.min(0, pos);
      }
    }
    content.css('left', pos);
  }
  
  $('button.right').on('click', {left: 1}, slide);
  $('button.left').on('click', {left: 0}, slide);
});