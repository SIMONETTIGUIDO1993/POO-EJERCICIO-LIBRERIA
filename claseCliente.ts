import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";

export class Cliente{
    private nombre:string;
    private apellido:string;
    private DNI:number;
    private direccion:string;
    private listadoAutorFav:string[];
    private listGenFav:string[];
    private descuento:number;

    public constructor(pNombre:string,pApellido:string,pDNI:number,pDireccion:string,pListadoAutorFav:string[],plistGenFav:string[],pDescuento:number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.DNI = pDNI;
        this.direccion = pDireccion;
        this.listadoAutorFav = pListadoAutorFav;
        this.listGenFav = plistGenFav;
        this.descuento= pDescuento;
    }

    getNombre():string{
        return this.nombre;
    }

    getApllido():string{
        return this.apellido;
    }
    getDNI():Number{
        return this.DNI;
    }
    getDireccion():string{
        return this.direccion;
    }
    getListadoAutorFav():string[]{
        return this.listadoAutorFav;
    }
    getListGenFav():string[]{
        return this.listGenFav;
    }
    getDescuento():number{
        return this.descuento;
    }







}