import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { ArticuloService } from "src/app/services/articulo.service";

@Injectable()
export class ArticuloDetailRouteActivator implements CanActivate {
    constructor(private articuloService:ArticuloService, private router:Router) {

    }

    canActivate (route:ActivatedRouteSnapshot){
        const articuloExists = !!this.articuloService.getArticulo(route.params['_id'])
        if (!articuloExists) {
            this.router.navigate(['/404'])
        }
        return articuloExists;
    }
    

    
}