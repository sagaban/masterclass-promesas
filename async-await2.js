
const square = async (n) => n * n;

const main = async () => {
  console.log("Acá empieza mi programa de Async Await 2");

  try {
    console.log(await square(2));
  } catch (error) {
    console.error("Hubo un error: " + error);
  }
};

main();
