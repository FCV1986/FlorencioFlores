// Base de datos automatizada desde "Hoja de cálculo sin título - Hoja 1.csv"
const productos = [
  { id: 1, nombre: "Acelga tallo naranjo", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/acelga-tallo-naranjo.jpg" },
  { id: 2, nombre: "Achicoria", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/achicoria.jpg" },
  { id: 3, nombre: "Ají cacho de cabra", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/aji-cacho-de-cabra.jpg" },
  { id: 4, nombre: "Ají cristal", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/aji-cristal.jpg" },
  { id: 5, nombre: "Ají habanero", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/aji-habanero.jpg" },
  { id: 6, nombre: "Ají jalapeño", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/aji-jalapeño.jpg" },
  { id: 7, nombre: "Amaranto", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/amaranto.jpg" },
  { id: 8, nombre: "Apio", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/apio.jpg" },
  { id: 9, nombre: "Berenjena", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/berenjena.jpg" },
  { id: 10, nombre: "Berro", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/berro.jpg" },
  { id: 11, nombre: "Betarraga", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/betarraga.jpg" },
  { id: 12, nombre: "Brócoli", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/brocoli.jpg" },
  { id: 13, nombre: "Calabaza Halloween", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/calabaza-halloween.jpg" },
  { id: 14, nombre: "Cebolla escaneba", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/cebolla-escaneba.jpg" },
  { id: 15, nombre: "Cebollín", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/cebollin.jpg" },
  { id: 16, nombre: "Ciboulette", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/ciboulette.jpg" },
  { id: 17, nombre: "Cilantro", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/cilantro.jpg" },
  { id: 18, nombre: "Col de Bruselas", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/col-de-bruselas.jpg" },
  { id: 19, nombre: "Coliflor", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/coliflor.jpg" },
  { id: 20, nombre: "Espinaca", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/espinaca.jpg" },
  { id: 21, nombre: "Lechuga crespa verde", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/lechuga-crespa-verde.jpg" },
  { id: 22, nombre: "Lechuga escarola", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/lechuga-escarola.jpg" },
  { id: 23, nombre: "Lechuga morada", caller: "sobres-hortalizas", precio: 1000, imagen: "imagenes/lechuga-morada.jpg" },
  { id: 24, nombre: "Melón tuna", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/melon-tuna.jpg" },
  { id: 25, nombre: "Nabo", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/nabo.jpg" },
  { id: 26, nombre: "Pepinillos", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/pepinillos.jpg" },
  { id: 27, nombre: "Pepino ensalada", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/pepino-ensalada.jpg" },
  { id: 28, nombre: "Perejil", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/perejil.jpg" },
  { id: 29, nombre: "Pimentón calafquén", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/pimenton-calafquen.jpg" },
  { id: 30, nombre: "Porotos verdes", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/porotos-verdes.jpg" },
  { id: 31, nombre: "Puerro", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/puerro.jpg" },
  { id: 32, nombre: "Rabanito", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/rabanito.jpg" },
  { id: 33, nombre: "Radicheta", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/radicheta.jpg" },
  { id: 34, nombre: "Repollo crespo", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/repollo-crespo.jpg" },
  { id: 35, nombre: "Repollo morado", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/repollo-morado.jpg" },
  { id: 36, nombre: "Rúcula", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/rucula.jpg" },
  { id: 37, nombre: "Sandía", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/sandia.jpg" },
  { id: 38, nombre: "Tomate cherri", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/tomate-cherri.jpg" },
  { id: 39, nombre: "Tomate limachino", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/tomate-limachino.jpg" },
  { id: 40, nombre: "Tomate larga vida", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/tomate-larga-vida.jpg" },
  { id: 41, nombre: "Zanahoria", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/zanahoria.jpg" },
  { id: 42, nombre: "Zapallo camote", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/zapallo-camote.jpg" },
  { id: 43, nombre: "Zapallo italiano", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/zapallo-italiano.jpg" },
  { id: 44, nombre: "Albahaca", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/albahaca.jpg" },
  { id: 45, nombre: "Huacatay", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/huacatay.jpg" },
  { id: 46, nombre: "Orégano", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/oregano.jpg" },
  { id: 47, nombre: "Salvia", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/salvia.jpg" },
  { id: 48, nombre: "Tomillo", categoria: "sobres-hortalizas", precio: 1000, imagen: "imagenes/tomillo.jpg" },
  { id: 49, nombre: "Garras de espárragos", categoria: "sobres-hortalizas", precio: 4000, imagen: "imagenes/garras-de-esparragos.jpg" }
];

// Lógica de respaldo por si la foto aún no existe en tu carpeta de GitHub
productos.forEach(p => {
    const img = new Image();
    img.src = p.imagen;
    img.onerror = () => {
        // Si da error 404 porque no has subido la foto real, muestra este icono bonito provisorio
        p.imagen = "https://cdn-icons-png.flaticon.com/512/628/628283.png"; 
    };
});
