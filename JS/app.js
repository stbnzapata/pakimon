let imagenes = [];

imagenes["El Feroz"] = "../img/lobo.png";
imagenes["El Cochinote"] = "../img/cerdo.png";
imagenes["La Grandota"] = "../img/vaca.png";
imagenes["El Picudo"] = "../img/pollo.png";

let coleccion = [];

coleccion.push(new Pakimon("El Feroz", "Pantano", 90, 45, 50))
coleccion.push(new Pakimon("El Cochinote", "Lodo", 85, 35 , 60))
coleccion.push(new Pakimon("La Grandota", "Tierra", 95, 40 , 40))
coleccion.push(new Pakimon("El Picudo", "Agua", 75, 50 , 50))

for(pakimon of coleccion)
{
    pakimon.mostrarImagen();
}