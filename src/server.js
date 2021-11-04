import emoji from "node-emoji";
import "./db.js";
import { app } from "./app.js";
/* import cluster from "cluster";
import os from "os"; */
import minimist from "minimist";

const arg = minimist(process.argv.slice(2));
console.log(arg);

/* const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    // Create a worker
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const PORT = parseInt(process.argv[2]) || 8080;

  app.get("/cluster", (req, res) => {
    res.send("Welcome from cluster configuration");
  });

  app.listen(PORT, () =>
    console.log(
      emoji.get("fire"),
      `Server started on port ${PORT} - PID WORKER ${process.pid} `
    )
  );
} */

const PORT = parseInt(process.argv[2]) || 8080;

app.listen(PORT, (err) => {
  if (!err)
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    );
});

export { arg, PORT };
