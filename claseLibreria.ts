import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";
import { Revista } from "./claseRevista";
import { Cliente } from "./claseCliente";

export class Lireria{
    private listaCLientes: Cliente[];
    private listaLibros: Libro[];
    private listaRevistas: Revista[];

    public constructor(pListaClientes:Cliente[],pListaLibros:Libro[],pListaRevistas:Revista[]){
        this.listaCLientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevistas;
    }

    setRevista(nuevaRevista:Revista):void{
        this.listaRevistas.push(nuevaRevista);
    }
    setClientes(nuevoCLiente:Cliente):void{
        this.listaCLientes.push(nuevoCLiente);
    }
    setLibro(nuevoLibro:Libro):void{
        this.listaLibros.push(nuevoLibro);
    }
    calcularPrecio(cliente:Cliente,articulo:Padre):number{
        let precioConDescuento:number=0
        precioConDescuento=articulo.getPrecio()*(1-cliente.getDescuento());
        return precioConDescuento;

    }




}