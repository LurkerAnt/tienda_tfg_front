import { precio } from "./precio";

export interface Articulo{
    _id?: any 
    nombre: string
    tipo: string
    color: string
    url: string
    existencias: boolean
    precio: Array<precio> 
    oferta: boolean
}