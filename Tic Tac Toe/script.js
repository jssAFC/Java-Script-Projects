const body=document.getElementById('body');

let total_turn=0;
let turn='O';

let xScore=0;
let oScore=0;

const board_array=new Array(9).fill("E");

let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];


  function checkWinner(){
    for([one,two,three] of winner){      
      if(board_array[one]==board_array[two] && board_array[two]==board_array[three] && board_array[three]!='E'){
        document.getElementById("gameStatus").innerHTML=`Winner is ${turn}`;
        gameBoard.removeEventListener("click",declareWinner);
        
        turn=='O'?oScore++:xScore++;
        document.querySelectorAll('.x-score')[0].innerHTML=`${xScore}`;
        document.querySelectorAll('.x-score')[1].innerHTML=`${xScore}`;
        document.querySelectorAll('.o-score')[0].innerHTML=`${oScore}`;
        document.querySelectorAll('.o-score')[1].innerHTML=`${oScore}`;
        return;
      }
      else if(total_turn==9){
        document.getElementById("gameStatus").innerHTML=`Match Drawn`;

      }
    };
  };

  const declareWinner=(event)=>{
    const eventVar=event.target;
    if(board_array[eventVar.id]=="E")
    if(turn=="O"){
      eventVar.textContent=turn;
      eventVar.classList.remove("bg-blue-600");
      eventVar.classList.add("bg-red-600");
      board_array[eventVar.id]=turn;
      document.getElementById('gameStatus').innerHTML="X's turn";
      
      total_turn++;
      checkWinner();
      turn="X";
    }
    else{
      eventVar.textContent=turn;
      eventVar.classList.remove("bg-red-600");
      eventVar.classList.add("bg-blue-600");
      board_array[eventVar.id]=turn;
      document.getElementById('gameStatus').innerHTML="O's turn";
  
      total_turn++;
      checkWinner();

      turn="O";
    }
  }

const gameBoard=document.getElementById('game-board');
gameBoard.addEventListener('click',declareWinner)

checkWinner();

const resetGame=(event)=>{
    board_array.fill("E");
    document.getElementById('gameStatus').innerHTML="O's turn";
    gameBoard.addEventListener('click',declareWinner);
    total_turn=0;
    turn='O';

    const cells=document.querySelectorAll('[data-cell]')
    Array.from(cells).forEach((div)=>{
      div.innerHTML="";
      div.classList.remove('bg-red-600');
      div.classList.remove('bg-blue-600');
    })

}

const resetButton=document.getElementById('resetButton');
resetButton.addEventListener('click',resetGame);


