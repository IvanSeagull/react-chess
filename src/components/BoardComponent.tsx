import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const onCellClick = (cell: Cell) => {
        if(selectedCell && selectedCell === cell) setSelectedCell(null)
        else if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else{
            if(cell.figure?.color === currentPlayer?.color){
                setSelectedCell(cell);
            }
        }
    }

    
    const highlightCells = () => {
        board.highlightCells(selectedCell);
        updateBoard()
    }
    
    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard);
    }

  return (
    <div>
        <h3>Current player: {currentPlayer?.color}</h3>
        <div className="board">
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map((cell, index) =><CellComponent click={onCellClick} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} cell={cell} key={cell.id}/> )}
                    </React.Fragment>
            )}
        </div>
    </div>
  )
}

export default BoardComponent