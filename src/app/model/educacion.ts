export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    tituloE: string;
    fechaE: string;
    imgE: string;
    estadoE: string;

    constructor(nombreE: string, descripcionE: string, tituloE: string, fechaE: string, imgE: string, estadoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tituloE = tituloE;
        this.fechaE = fechaE;
        this.imgE = imgE;
        this.estadoE = estadoE;
    }
}
