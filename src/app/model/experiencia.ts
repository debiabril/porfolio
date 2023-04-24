export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgE: string;
    puestoE: string;
    fechaE: string;

    constructor(nombreE: string, descripcionE: string, imgE: string, puestoE: string, fechaE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.puestoE = puestoE;
        this.fechaE = fechaE;
    }
}
