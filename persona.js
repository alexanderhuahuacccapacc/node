const Persona={
    nombre:"Alexander",
    apellido:"Huahuaccapa",
    dni:"77148477",
    Codigo_Universitario:"20232222",
    getNombre:function(){
        return this.nombre
    },

    getApellido:function(){
        return this.apellido
    },

    getDNI:function(){
        return this.dni
    },

    getCodigo:function(){
        return this.Codigo_Universitario
    }
}
exports.Persona=Persona;
module.exports=Persona;
