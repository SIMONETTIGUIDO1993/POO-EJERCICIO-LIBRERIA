export class Padre {
    protected titulo:string;
    protected cantidadPAg:number;
    protected autor:string;
    protected precio: number;

    public constructor (pTitulo:string, pcantPaginas:number, pAutor:string, pPrecio:number){
        this.titulo = pTitulo;
        this.cantidadPAg = pcantPaginas;
        this.autor = pAutor;
        this.precio = pPrecio;
    }

    getTitulo():string{
        return this.titulo;
    }
    getCantPaginas():number{
        return this.cantidadPAg;
    }
    getAutor():string{
        return this.autor
    }
    getPrecio():number{
        return this.precio;
    }

}