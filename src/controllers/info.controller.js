import { arg } from "../server.js";
import os from "os";

const nCpus = os.cpus().length;

export async function renderInfo(req, res) {
  const datos = {
    argumentos: arg._,
    plataforma: process.platform,
    node: process.version,
    memoria: process.memoryUsage(),
    path: process.execPath,
    id: process.pid,
    folder: process.cwd(),
    procesadores: nCpus,
  };
  res.status(200).json({ datos });
}
