// Movement ~ CHARACTER --------- START
$(window).keydown(function(e) {
  var max = $('#container').width() - 300;
  var min = 10;
  var move_amt = 10;
  var position = $("#character").offset();
  if(e.which == 37) { // left
    var new_left = ((position.left-move_amt < min) ? min : position.left-move_amt);
    $("#character").offset({ left: new_left})
  }
  else if(e.which == 39) { // right
    var new_left = ((position.left+move_amt > max) ? max : position.left+move_amt);
    $("#character").offset({ left: new_left})
  }
});
// Movement ~ CHARACTER --------- END
