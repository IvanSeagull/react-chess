import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure{
    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        return true;
    }
}