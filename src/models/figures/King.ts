import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"
import { Board } from "../Board";

export class King extends Figure{

    isFirstStep: boolean = true;

    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell, board : Board): boolean {
        if(!super.canMove(target, board)) return false;
        
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        if(dx <=1 && dy <=1) return true;

        // handle castling
        if(this.isFirstStep){
            if( this.cell.figure?.color === Colors.BLACK &&  (board.getCell(0,0).isRook(Colors.BLACK) || board.getCell(0,7).isRook(Colors.BLACK))){
                if (this.cell.isEmptyHorizontal(target)) return true
            }
            if( this.cell.figure?.color === Colors.WHITE &&  (board.getCell(7,0).isRook(Colors.WHITE) || board.getCell(7,7).isRook(Colors.WHITE))){
                if (this.cell.isEmptyHorizontal(target)) return true
            }
        }
        return false;
    }
}