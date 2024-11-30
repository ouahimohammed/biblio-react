import React from 'react';
import ListLivre from './components/ListLivre';
import LivresEmpruntes from './components/LivresEmpruntes';
import { EmpruntProvider } from './context/EmpruntContext';

function App() {
  return (
    <EmpruntProvider>
      {/* Container principal */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
        {/* En-tête */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
            Gestion d'emprunt 📚
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Gérez vos livres disponibles et empruntés facilement.
          </p>
        </header>

        {/* Grille des composants */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Section ListLivre */}
          <section className="bg-white/60 backdrop-blur-md shadow-lg rounded-lg p-6">
            <ListLivre />
          </section>

          {/* Section LivresEmpruntes */}
          <section className="bg-white/60 backdrop-blur-md shadow-lg rounded-lg p-6">
            <LivresEmpruntes />
          </section>
        </main>
      </div>
    </EmpruntProvider>
  );
}

export default App;
