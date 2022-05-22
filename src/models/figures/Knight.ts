import { Figure, FigureNames } from "./Figure";

import { Cell } from "../Cell";
import { Colors } from "../Colors";

import blackLogo from "../../assets/black-knight.png"
import whiteLogo from "../../assets/white-knight.png"


export class Knight extends Figure{
    constructor(cell: Cell, color: Colors){
        super(cell, color);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        return true;
    }

}