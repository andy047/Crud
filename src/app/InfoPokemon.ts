

export class InfoPokemon{

    nombre:string;
    altura:number;
    foto:string;
    habilidades:Array<string>;



    constructor(nombre?:string,altura?:number,foto?:string,habilidades?:Array<string>) {
        this.nombre=nombre;
        this.altura=altura;
        this.foto=foto;
        this.habilidades=habilidades ;
        
    }

}