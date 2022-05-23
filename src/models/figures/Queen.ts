import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

import blackLogo from "../../assets/black-queen.png"
import whiteLogo from "../../assets/white-queen.png"
import { Board } from "../Board";

export class Queen extends Figure{

    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell, board: Board): boolean {
        if(!super.canMove(target, board)) return false;

        if(this.cell.isEmptyVertical(target)) return true;

        if(this.cell.isEmptyHorizontal(target)) return true;

        if(this.cell.isEmptyDiagonal(target)) return true;
        return false
    }
}