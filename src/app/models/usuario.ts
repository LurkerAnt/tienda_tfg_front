import { DatePipe } from "@angular/common";

export interface Usuario{
    _id?: any
    nombre: string
    apellido: string
    email: string
    password: string
    fecha: Date
    admin: boolean
}