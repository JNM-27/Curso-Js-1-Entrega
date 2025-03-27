const libro1 = {
  nombre: "El Conde de Montecristo",
  año: 1891,
  precio: 3000,
};
const libro2 = {
  nombre: "Lord of the Flies",
  año: 1951,
  precio: 2500,
};
const libro3 = {
  nombre: "Don Quijote de La Mancha",
  año: 1605,
  precio: 2000,
};
const libro4 = {
  nombre: "El Señor de los Anillos: La Comunidad del Anillo",
  año: 1954,
  precio: 1500,
};
const libro5 = {
  nombre: "The Shining",
  año: 1977,
  precio: 1000,
};

const libros = [libro1, libro2, libro3, libro4, libro5];
const librosCarrito = [];

function añadirLibroAlCarrito() {
  let libroCarrito = prompt(
    "ingrese el libro que quiera añadir al carrito: \n 1: El Conde de Montecristo \n 2: Lord of the Flies \n 3: Don Quijote de la Mancha \n 4: El Señor de los Anillos: La Comunidad del Anillo \n 5: The Shining \n 0: Finalizar Programa "
  );
  while (libroCarrito != "salir") {
    switch (libroCarrito) {
      case "1":
        librosCarrito.push(libro1);
        break;
      case "2":
        librosCarrito.push(libro2);
        break;
      case "3":
        librosCarrito.push(libro3);
        break;
      case "4":
        librosCarrito.push(libro4);
        break;
      case "5":
        librosCarrito.push(libro5);
        break;
    }
    libroCarrito = prompt(
      "ingrese el libro que quiera añadir al carrito: \n 1: El Conde de Montecristo \n 2: Lord of the Flies \n 3: Don Quijote de la Mancha \n 4: El Señor de los Anillos: La Comunidad del Anillo \n 5: The Shining \n Ingrese salir para finalizar el ingreso"
    );
  }
  console.log("Carrito:");
  console.log(librosCarrito);
}
function filtrarPrecio() {
  let precioComparación = prompt("filtrar por libros de menos de: ");
  console.log("Libros de menos de $" + precioComparación);
  const menosDe2000 = libros.filter(
    (libros) => libros.precio < precioComparación
  );
  console.log(menosDe2000);
}
function filtrarAño() {
  let añoComparación = prompt("filtrar por libros de después de: ");
  console.log("Libros de " + añoComparación, " en adelante");
  const DeXEnAdelante = libros.filter((libros) => libros.año >= añoComparación);
  console.log(DeXEnAdelante);
}
function calcularPrecioFinal() {
  let precioCalculo = 0;
  for (const libroCarrito of librosCarrito) {
    precioCalculo = precioCalculo + libroCarrito.precio;
  }
  return precioCalculo;
}
function CalcularRestanteParaDescuento(a, b) {
  let diferencia = a - b;
  return diferencia;
}

let n = prompt(
  "Ingrese el número de la función que desea realizar: \n 1: Añadir libros al carrito \n 2: Filtrar libros por precio \n 3: Filtrar libros por año \n 4: Calcular restante para descuento del %20 \n 5: Finalizar compra \n 0: Finalizar programa"
);
while (n != 0) {
  switch (n) {
    case "1":
      añadirLibroAlCarrito();
      break;
    case "2":
      filtrarPrecio();
      break;
    case "3":
      filtrarAño();
      break;
    case "4":
      let diferenciadeprecio = CalcularRestanteParaDescuento(
        5000,
        calcularPrecioFinal()
      );
      if (diferenciadeprecio > 0) {
        console.log(
          "Restan $" + diferenciadeprecio,
          "para el descuento del %20"
        );
      } else {
        console.log("Alcanza el monto mínimo para el descuento");
      }

      break;
    case "5":
      let precioFinal = calcularPrecioFinal();
      if (precioFinal >= 5000) {
        precioFinal = precioFinal * 0.8;
        console.log("Descuento del %20 \n Precio Final:" + precioFinal);
      } else {
        console.log("Precio Final: $" + precioFinal);
      }
      break;
    default:
      console.log("Valor No Valido");
  }
  n = prompt(
    "Ingrese el número de la función que desea realizar: \n 1: Añadir libros al carrito \n 2: Filtrar libros por precio \n 3: Filtrar libros por año \n 4: Calcular restante para descuento del %20 \n 5: Finalizar compra \n 0: Finalizar programa"
  );
}
