class Pakimon
{
    constructor(nombre, tipo, vida, ataque, defensa)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrarImagen()
    {
        document.body.appendChild(this.imagen);
       
        document.write("<div>");
    
            document.write("Nombre: " + "<strong>" + this.nombre + "</strong>" + "<br/>");            
            
            document.write("Tipo: " + this.tipo + "<br/>");
            
            document.write("Vida: " + this.vida + "<br/>");
            
            document.write("Ataque: " + this.ataque + "<br/>");
        
            document.write("Defensa: " + this.defensa + "<br/>");

        document.write("</div>");
       
        document.write("<hr/>");
    }
}