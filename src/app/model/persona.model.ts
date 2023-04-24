export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    titulo: string;
    email: string;
    celular: string;
    fechaNacimiento: string;
    ciudad: string;
    banner: string;


    constructor(nombre:string,apellido:string, descripcion: string, img:string,titulo: string, email: string, celular: string, fechaNacimiento: string, ciudad: string, banner: string,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.titulo = titulo;
        this.email = email;
        this.celular = celular;
        this.fechaNacimiento = fechaNacimiento;
        this.ciudad = ciudad;
        this.banner = banner;
    }

}