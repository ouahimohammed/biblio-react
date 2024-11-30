import React, { useState, useEffect } from 'react';
import { useEmprunt } from '../context/EmpruntContext';
import { fetchLivres } from '../services/api';
import Message from './Message';

const ListLivre = () => {
  const [livres, setLivres] = useState([]);
  const { emprunts, empruntLivre, message, clearMessage } = useEmprunt();

  useEffect(() => {
    const getLivres = async () => {
      try {
        const data = await fetchLivres();
        setLivres(data);
      } catch (error) {
        console.error('Failed to fetch livres:', error);
      }
    };

    getLivres();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  const handleEmprunt = (livre) => {
    if (livre.disponible) {
      empruntLivre(livre);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-200/50 to-gray-300/50 backdrop-blur-md shadow-xl rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text shadow-md">
        📚 Livres disponibles
      </h2>
      {message && <Message type={message.type} content={message.content} />}
      <table className="table-auto w-full border-collapse shadow-md">
        <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              📖 Titre
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              🖋 Auteur
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              ⚡ Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white/60 backdrop-blur-sm divide-y divide-gray-200">
          {livres.map((livre) => (
            <tr
              key={livre.id}
              className="hover:bg-blue-50/70 transition duration-200"
            >
              <td className="px-4 py-2 text-sm whitespace-nowrap">{livre.titre}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">{livre.auteur}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">
                {livre.disponible && !emprunts.some((e) => e.id === livre.id) ? (
                  <button
                    onClick={() => handleEmprunt(livre)}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300"
                  >
                    Emprunter 🚀
                  </button>
                ) : (
                  <span className="text-gray-500">Indisponible</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListLivre;
