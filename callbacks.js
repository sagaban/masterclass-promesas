import { request } from "native-request";

const fakeApiCallback = (callback) => {
  setTimeout(() => {
    callback(null, "Probando 123");
    // callback("Permisos insuficientes", null);
  }, 1500);
};

const main = () => {
  console.log("Acá empieza mi programa");
  // const resultado = fakeApiCallback()
  // fakeApiCallback((error, datos) => {
  //   if (!error) {
  //     console.log("Los datos son: " + datos);
  //   } else {
  //     console.error("Hubo un error: " + error);
  //   }
  // });

  const argumento = function (error, datos) {
    if (!error) {
      console.log("Los datos son: " + datos);
    } else {
      console.error("Hubo un error: " + error);
    }
  };
  fakeApiCallback(argumento);

  // request(
  //   {
  //     url: "https://restcountries.com/v3.1/name/argentinasss",
  //     method: "GET",
  //   },
  //   (err, data, status) => {
  //     if (!err && status === 200) {
  //       console.log(JSON.parse(data)[0].name.official);
  //     } else {
  //       console.error("Hubo un error: " + err);
  //     }
  //   }
  // );

  const primerArgumento = {
    url: "https://restcountries.com/v3.1/name/argentina",
    method: "GET",
  };

  // callback
  const segundoArgumento = (err, data, status) => {
    if (!err && status === 200) {
      console.log(JSON.parse(data)[0].name.official);
    } else {
      console.error("Hubo un error: " + err);
    }
  };

  request(primerArgumento, segundoArgumento);
};

main();
