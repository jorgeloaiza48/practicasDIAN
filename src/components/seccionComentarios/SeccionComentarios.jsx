import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/comments";

export const SeccionComentarios = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setComments(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const res = await axios.post(API_URL, { name, text });
    setComments([res.data, ...comments]);
    setName("");
    setText("");
  };

  const handleLike = async (id) => {
  const liked = getLikedComments();
  if (liked.includes(id)) return; // ya lo likeó

  try {
    const res = await axios.put(`${API_URL}/${id}/like`);
    saveLikedComment(id); // guardar en localStorage
    setComments((prev) =>
      prev.map((comment) => (comment.id === id ? res.data : comment))
    );
  } catch (err) {
    console.error("Error al dar like:", err);
  }
};

  const getLikedComments = () => {
  return JSON.parse(localStorage.getItem("likedComments") || "[]");
};

const saveLikedComment = (id) => {
  const liked = getLikedComments();
  if (!liked.includes(id)) {
    liked.push(id);
    localStorage.setItem("likedComments", JSON.stringify(liked));
  }
};


  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Sección de Comentarios</h2>

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
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Publicar
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">No hay comentarios aún.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border rounded-md p-3 bg-gray-50">
              <div className="font-semibold text-blue-800">{comment.name}</div>
              <div className="text-sm text-gray-600">{comment.date}</div>
              <p className="mt-2">{comment.text}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => handleLike(comment.id)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  👍 Like
                </button>
                <span className="text-sm text-gray-600">
                  {comment.likes || 0} likes
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
