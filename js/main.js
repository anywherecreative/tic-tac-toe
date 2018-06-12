currentPlayer = "O";
$(document).ready(function() {
  $('.square').click(function() {
    if($(this).hasClass('used')) {
      return; //can't reuse a square
    }
    $(this).addClass('used');
    $(this).data('player',currentPlayer);
    $(this).text(currentPlayer);
    if(currentPlayer == "O") {
      currentPlayer = "X"
    }
    else {
      currentPlayer = "O"
    }
  })
});
