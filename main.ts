import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";
import { Revista } from "./claseRevista";
import { Cliente } from "./claseCliente";
import { Lireria } from "./claseLibreria";

let autores = ["rosa","pedro","juan"]
let generos= ["drama","accion","comedia","vaqueros"]

let cliente1:Cliente = new Cliente("juan","perez",1111,"velez  sarfield",autores,generos,0.1);
let cliente2:Cliente = new Cliente("Alvaro","Roquez",22222,"velez  sarfield 23",autores,generos,0.3);

let libro1:Libro = new Libro("Titulo1", 50,"Pedro",200,"comedia","sdaassaasad");
let libro2:Libro = new Libro("Titulo22", 100,"Pedro",400,"drama","sdaassaasad");

let revista1:Revista = new Revista("titulo1",50,"rosa",200,5,2022);
let revista2:Revista = new Revista("titulo2254",50,"Juan",50,12,2022);

let arregloClientes:Cliente[]= [cliente1,cliente2];
let arregloLibros:Libro[]= [libro1,libro2];
let arregloRevista:Revista[]= [revista1,revista2];

let libreria1:Lireria=new Lireria(arregloClientes,arregloLibros,arregloRevista);

let primerPrecio = libreria1.calcularPrecio(cliente1,libro1);
console.log(primerPrecio);



