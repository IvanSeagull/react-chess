import { Colors } from "../Colors";
import { Cell } from "../Cell";
import { Board } from "../Board";

export enum FigureNames {
    FIGURE="Figure",
    KING="King",
    QUEEN="Queen",
    ROOK="Rook",
    BISHOP="Bishop",
    KNIGHT="Knight",
    PAWN="Pawn"
}

export class Figure{
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(cell: Cell, color: Colors){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }


    canMove(target: Cell, board : Board) : boolean{
        if(target.figure?.color === this.color)
            return false
        if(target.figure?.name === FigureNames.KING)
            return false
        return true
    }

    moveFigure(target: Cell){}
}