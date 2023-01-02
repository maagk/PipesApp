import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";


@Pipe({

    name:'mayusculas'

})
export class MayusculasPipe implements PipeTransform {

    transform(value:string, enMayusculas:boolean = true ): string {
        
        // if( enMayusculas ){
        //     return value.toUpperCase() ;
        // }else{
        //     return value.toLowerCase() ;
        // }
        // todo esto de arriva tambien se pue hacer con un ternario

        // si (enMayusculas) esta en true entonces value.toUper.... (:) csaso contrarios value.toLower...
        return ( enMayusculas ) ? value.toUpperCase() : value.toLowerCase();

    }

}