import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"

export class King extends Figure{
    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        return true;
    }
}