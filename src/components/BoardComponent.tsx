import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const onCellClick = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        } else{
            setSelectedCell(cell);
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
    <div className="board">
        {board.cells.map((row, index) => 
            <React.Fragment key={index}>
                {row.map((cell, index) =><CellComponent click={onCellClick} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} cell={cell} key={cell.id}/> )}
                </React.Fragment>
        )}

    </div>
  )
}

export default BoardComponent