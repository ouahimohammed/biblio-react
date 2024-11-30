import React from 'react';
import { useEmprunt } from '../context/EmpruntContext';
import Message from './Message';

const LivresEmpruntes = () => {
  const { emprunts, rendreLivre, message } = useEmprunt();

  return (
    <div className="bg-gradient-to-r from-gray-200/50 to-gray-300/50 backdrop-blur-md shadow-xl rounded-lg overflow-hidden p-6">
      <h2 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-green-500 to-teal-600 text-transparent bg-clip-text shadow-md">
        📦 Livres empruntés
      </h2>
      {message && <Message type={message.type} content={message.content} />}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-md">
          <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                📖 Titre
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                🖋 Auteur
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                🛠️ Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white/60 backdrop-blur-sm divide-y divide-gray-200">
            {emprunts.map((livre) => (
              <tr
                key={livre.id}
                className="hover:bg-teal-50/70 transition duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">{livre.titre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{livre.auteur}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => rendreLivre(livre.id)}
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
                  >
                    Rendre 🔄
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LivresEmpruntes;
