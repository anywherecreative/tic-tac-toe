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
  $('.row').each(function() {
    if($(".X",this).length == 3) {
      alert('X wins!');
    }
    if($(".O",this).length == 3) {
      alert('O wins!');
    }
  })

  //check vertical
  for(var a = 1;a <= 3;a++) {
    if($(".row:nth-child(1) .square:nth-child(" + a + ")").hasClass('O') &&
       $(".row:nth-child(2) .square:nth-child(" + a + ")").hasClass('O') &&
       $(".row:nth-child(3) .square:nth-child(" + a + ")").hasClass('O')
     ) {
       alert('O wins!');
       break;
     }

     if($(".row:nth-child(1) .square:nth-child(" + a + ")").hasClass('X') &&
        $(".row:nth-child(2) .square:nth-child(" + a + ")").hasClass('X') &&
        $(".row:nth-child(3) .square:nth-child(" + a + ")").hasClass('X')
      ) {
        alert('X wins!');break;
      }
    }

    //check diagonal
    if($(".row:nth-child(1) .square:nth-child(1)").hasClass('O') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('O') &&
      $(".row:nth-child(3) .square:nth-child(3)").hasClass('O')
      ) {
        alert('O wins!');
    }
    if($(".row:nth-child(3) .square:nth-child(1)").hasClass('O') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('O') &&
      $(".row:nth-child(1) .square:nth-child(3)").hasClass('O')
      ) {
        alert('O wins!');
    }

    //check diagonal
    if($(".row:nth-child(1) .square:nth-child(1)").hasClass('X') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('X') &&
      $(".row:nth-child(3) .square:nth-child(3)").hasClass('X')
      ) {
        alert('O wins!');
    }
    if($(".row:nth-child(3) .square:nth-child(1)").hasClass('X') &&
      $(".row:nth-child(2) .square:nth-child(2)").hasClass('X') &&
      $(".row:nth-child(1) .square:nth-child(3)").hasClass('X')
      ) {
        alert('O wins!');
    }
  }
