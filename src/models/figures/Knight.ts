import { Figure, FigureNames } from "./Figure";

import { Cell } from "../Cell";
import { Colors } from "../Colors";

import blackLogo from "../../assets/black-knight.png"
import whiteLogo from "../../assets/white-knight.png"
import { Board } from "../Board";


export class Knight extends Figure{
    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell, board: Board): boolean {
        if(!super.canMove(target, board)) return false;

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);


        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }

}