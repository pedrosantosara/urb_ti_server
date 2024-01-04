import express from "express";
import "dotenv/config";
import routes from "./routes";
import { prisma } from "./database/client";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { createServer } from "http";
import { Server } from 'socket.io';

const port = process.env.PORT || 8084;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(routes);


io.on("connection", (socket) => {
  console.log("Novo cliente conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});


httpServer.listen(port, async () => {
  console.log(`O servidor está escutando a porta: ${port}`);
  await prisma
    .$connect()
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch(() => {
      console.error("Não foi possível se conectar a base de dados.");
      process.exit(0);
    });
});

export { io };
