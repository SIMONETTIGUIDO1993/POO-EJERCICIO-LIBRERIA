import { Padre } from "./clasePadre";

export class Libro extends Padre{
    private genero:string;
    private resumen:string;

    public constructor(pTitulo:string, pcantPaginas:number, pAutor:string, pPrecio:number,pGenero,pResumen){
        super(pTitulo, pcantPaginas, pAutor, pPrecio);
        this.genero = pGenero;
        this.resumen = pResumen;
    }


    getResumen():string{
        return this.resumen;
    }

    getGenero():string{
        return this.genero;
    }
}