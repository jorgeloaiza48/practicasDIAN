import { useEffect, useState } from 'react';

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => {
        // Ordena por fecha descendente
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
      });
  }, []);

  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Últimas Publicaciones
      </h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2 font-bold">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <img className='p-3' src={post.image} alt='' />
            <strong><p className='text-xs mb-2'>Fuente imagen: {post.fuente}</p></strong>
            <p className="text-gray-700 text-justify">{post.content}</p><br></br>
          </article>
        ))}
      </div>
    </section>
  );
}
