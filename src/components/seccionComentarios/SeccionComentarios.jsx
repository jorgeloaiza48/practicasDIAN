import React, { useState, useEffect } from "react";

export const SeccionComentarios = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("comments");
    if (stored) setComments(JSON.parse(stored));
  }, []);

  // Guardar cada vez que cambian los comentarios
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    if (editingId) {
      setComments((prev) =>
        prev.map((c) =>
          c.id === editingId ? { ...c, name, text, date: new Date().toLocaleString() } : c
        )
      );
      setEditingId(null);
    } else {
      const newComment = {
        id: Date.now(),
        name,
        text,
        date: new Date().toLocaleString(),
      };
      setComments([newComment, ...comments]);
    }

    setName("");
    setText("");
  };

  const handleEdit = (id) => {
    const comment = comments.find((c) => c.id === id);
    if (comment) {
      setName(comment.name);
      setText(comment.text);
      setEditingId(id);
    }
  };

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de eliminar este comentario?")) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {editingId ? "Editar comentario" : "Sección de Comentarios"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded-md"
        />
        <textarea
          placeholder="Escribe un comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 rounded-md"
          rows={3}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {editingId ? "Actualizar" : "Publicar"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setName("");
                setText("");
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">No hay comentarios aún.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border rounded-md p-3 bg-gray-50 relative">
              <div className="font-semibold text-blue-800">{comment.name}</div>
              <div className="text-sm text-gray-600">{comment.date}</div>
              <p className="mt-2">{comment.text}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                {/* <button
                  onClick={() => handleEdit(comment.id)}
                  className="text-sm text-yellow-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Eliminar
                </button> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
