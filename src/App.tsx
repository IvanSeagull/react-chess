import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);


  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer === whitePlayer ? blackPlayer : whitePlayer)
  }


  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>
      <div>
        <LostFigures title="Black figures" figures={board.lostBlackFigures}/>
        <LostFigures title="White figures" figures={board.lostWhiteFigures}/>

      </div>
    </div>
  );
}

export default App;
