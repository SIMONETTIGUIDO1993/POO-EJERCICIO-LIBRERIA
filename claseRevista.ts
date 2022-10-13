import { Padre } from "./clasePadre";

export class Revista extends Padre{
    private numero:number;
    private año:number;

    public constructor(pTitulo:string, pcantPaginas:number, pAutor:string, pPrecio:number,pNumero,pAño){
        super(pTitulo, pcantPaginas, pAutor, pPrecio);
        this.numero = pNumero;
        this.año = pAño;
    }


    getNumero():number{
        return this.numero;
    }

    getAño():number{
        return this.año;
    }
}