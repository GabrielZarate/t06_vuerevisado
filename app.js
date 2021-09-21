const app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        apellido: '',
        edad: null,
        profesion: '',
        pais: '',
        nombre_guardado: '',
        apellido_guardado: '',
        edad_guardado: null,
        profesion_guardado: '',
        pais_guardado: '',
    },
    computed: {
        usuario: {
            get: function() {
                if (this.nombre && this.apellido) {
                    return this.nombre + ' ' + this.apellido;
                } else{
                    return this.nombre || this.apellido;
                }
            },
            set: function(nuevoNombre){
                const nombres = nuevoNombre.split(' ');

                if (nombres.length === 2){
                    this.nombre = nombres[0];
                    this.apellido = nombres[1];
                } else if (nombres.length <= 1){
                    this.nombre = nombres[0] || '';
                    this.apellido = '';
                }
            }
        },
        usuario_guardado: {
            get: function() {
                if (this.nombre_guardado && this.apellido_guardado) {
                    return this.nombre_guardado + ' ' + this.apellido_guardado;
                } else{
                    return this.nombre_guardado || this.apellido_guardado;
                }
            },
            set: function(nuevoNombre_guardado){
                const nombres_guardados = nuevoNombre_guardado.split(' ');

                if (nombres_guardados.length === 2){
                    this.nombre_guardado = nombres_guardados[0];
                    this.apellido_guardado = nombres_guardados[1];
                } else if (nombres_guardados.length <= 1){
                    this.nombre_guardado = nombres_guardados[0] || '';
                    this.apellido_guardado = '';
                }
            }
        }
    },
    methods: {
        resetear: function(){
            this.nombre = '';
            this.apellido = '';
            this.edad = null;
            this.profesion= '';
            this.pais= '';
            
        },

        guardar: function(event){
            this.nombre_guardado = this.nombre;
            this.apellido_guardado = this.apellido;
            this.edad_guardado = this.edad;
            this.profesion_guardado= this.profesion;
            this.pais_guardado= this.pais;
            
        },
        
        imprimir: function(event){
            this.nombre_guardado = this.nombre;
            this.apellido_guardado = this.apellido;
            this.edad_guardado = this.edad;
            this.profesion_guardado= this.profesion;
            this.pais_guardado= this.pais;
            
        }
    }
})