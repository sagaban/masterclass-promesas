import fetch from "node-fetch";

const fakeApiPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Probando 123");
    // reject("Permisos insuficientes");
  }, 2500);
});

const main = () => {
  console.log("Acá empieza mi programa de promesas");

  fakeApiPromise
    .then((caca) => {
      console.log("Los datos son: " + caca);
    })
    .catch((error) => console.error("Hubo un error: " + error));

  //////////////////////////////
  fetch("https://restcountries.com/v3.1/name/argentina")
    .then((response) => response.json())
    .then((data) => console.log(data[0].name.official))
    .catch((error) => console.error("Hubo un error: " + error));
};

main();
