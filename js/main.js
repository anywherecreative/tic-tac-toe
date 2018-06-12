currentPlayer = "O";
$(document).ready(function() {
  $('.square').click(function() {
    if($(this).hasClass('used')) {
      return; //can't reuse a square
    }
    $(this).addClass('used');
    $(this).addClass(currentPlayer);
    $(this).text(currentPlayer);
    if(currentPlayer == "O") {
      currentPlayer = "X"
    }
    else {
      currentPlayer = "O"
    }
    checkWin();
  })
});

function checkWin() {
  //check horizontal
  var win = false;
  $('.row').each(function() {
    if($(".X",this).length == 3) {
      win = "X";
    }
    if($(".O",this).length == 3) {
      win = "O";
    }
  })

  //check vertical
  for(var a = 1;a <= 3;a++) {
    if($(".row:nth-child(1) .square:nth-child(" + a + ")").hasClass('O') &&
       $(".row:nth-child(2) .square:nth-child(" + a + ")").hasClass('O') &&
       $(".row:nth-child(3) .square:nth-child(" + a + ")").hasClass('O')
     ) {
       win = "O";
     }

     if($(".row:nth-child(1) .square:nth-child(" + a + ")").hasClass('X') &&
        $(".row:nth-child(2) .square:nth-child(" + a + ")").hasClass('X') &&
        $(".row:nth-child(3) .square:nth-child(" + a + ")").hasClass('X')
      ) {
        win = "X";
      }
    }

    //check diagonal
    if($(".row:nth-child(1) .square:nth-child(1)").hasClass('O') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('O') &&
      $(".row:nth-child(3) .square:nth-child(3)").hasClass('O')
      ) {
        win = "O";
    }
    if($(".row:nth-child(3) .square:nth-child(1)").hasClass('O') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('O') &&
      $(".row:nth-child(1) .square:nth-child(3)").hasClass('O')
      ) {
          win = "O";
    }

    //check diagonal
    if($(".row:nth-child(1) .square:nth-child(1)").hasClass('X') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('X') &&
      $(".row:nth-child(3) .square:nth-child(3)").hasClass('X')
      ) {
          win = "X";
    }
    if($(".row:nth-child(3) .square:nth-child(1)").hasClass('X') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('X') &&
      $(".row:nth-child(1) .square:nth-child(3)").hasClass('X')
      ) {
          win = "X";
    }
    if(win !== false) {
      $('.board').hide();
      $('.win').show(10,function() {
        $('.win H1').text(win + " WINS!");
      });

    }
  }
