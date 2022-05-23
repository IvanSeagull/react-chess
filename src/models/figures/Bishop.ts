import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-bishop.png"
import whiteLogo from "../../assets/white-bishop.png"
import { Board } from "../Board";


export class Bishop extends Figure{
    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell, board : Board): boolean {
        if(!super.canMove(target, board)) return false;

        if(this.cell.isEmptyDiagonal(target)) return true
        return false;
    }
}