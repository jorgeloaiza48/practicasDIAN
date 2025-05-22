import express, { json } from "express";
import { readFile, writeFile } from "fs";
import fs from "fs"
import cors from "cors";
const app = express();
const PORT = 3001;

app.use(cors());
app.use(json());

const FILE_PATH = "./comments.json";

// GET - leer comentarios
app.get("/comments", (req, res) => {
  readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer el archivo" });
    const comments = JSON.parse(data || "[]");
    res.json(comments);
  });
});

// POST - guardar comentario nuevo
app.post("/comments", (req, res) => {
  const newComment = {
    id: Date.now(),
    ...req.body,
    date: new Date().toLocaleString(),
  };

  readFile(FILE_PATH, "utf8", (err, data) => {
    const comments = err ? [] : JSON.parse(data || "[]");
    comments.unshift(newComment);
    writeFile(FILE_PATH, JSON.stringify(comments, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "No se pudo guardar el comentario" });
      res.json(newComment);
    });
  });
});

// PUT - aumentar likes de un comentario
app.put("/comments/:id/like", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer archivo" });

    let comments = JSON.parse(data || "[]");
    const commentId = parseInt(req.params.id, 10);

    const index = comments.findIndex((c) => c.id === commentId);
    if (index === -1) return res.status(404).json({ error: "Comentario no encontrado" });

    comments[index].likes = (comments[index].likes || 0) + 1;

    fs.writeFile(FILE_PATH, JSON.stringify(comments, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error al guardar" });
      res.json(comments[index]);
    });
  });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
