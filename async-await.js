import fetch from "node-fetch";

const fakeApiPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Probando 123");
    // reject("Permisos insuficientes");
  }, 1500);
});

const main = async () => {
  console.log("Acá empieza mi programa de Async Await");

  // Para manejar los errores de async/await
  try {
    // El resolve de la promesa se asigna a caca
    const caca = await fakeApiPromise; //  "Probando 123"
    console.log("Los datos son: " + caca);

    const data = await fetch(
      "https://restcountries.com/v3.1/name/argentina"
    ).then((response) => response.json());

    console.log(data[0].name.official);

  } catch (error) {
    console.error("Hubo un error: " + error);
  }
};

main();
