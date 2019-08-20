// To add methods in a Object

const persona = {
    nombre: 'Gabriel',
    trabajo: 'Desarrollador web',
    edad: 19,
    // con this podemos acceder a los valores del objeto
    showInfo(){
        console.log(`${this.nombre} es ${this.trabjao} y su edad es ${this.edad}`);
    }
}

persona.showInfo();