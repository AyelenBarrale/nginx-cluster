import { PORT } from "../server.js";

export const renderRandom = async (req, res) => {
  try {
    const {
      query: { cant },
    } = req;

    const datos = {
      id: process.pid,
      puerto: PORT,
    };

    const quantity = Number(cant) || 100000000;
    let c = 0;
    const numeros = {};

    while (c < quantity) {
      const randomNum = Math.round(Math.random() * 999) + 1;
      if (numeros[randomNum]) {
        numeros[randomNum] += 1;
      } else {
        numeros[randomNum] = 1;
      }
      c += 1;
    }

    res.status(200).json({
      NUMEROS: numeros,
      DATOS: datos,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
