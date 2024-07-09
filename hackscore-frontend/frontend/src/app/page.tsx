'use client';
import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Importando o Axios configurado
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const [totalAvaliadores, setTotalAvaliadores] = useState(0);
  const [totalEquipes, setTotalEquipes] = useState(0);
  const [totalAvaliacoes, setTotalAvaliacoes] = useState(0);

  useEffect(() => {
    api.get('/avaliadores')
      .then((response) => setTotalAvaliadores(response.data.length))
      .catch((error) => console.error('Erro ao buscar avaliadores:', error));

    api.get('/equipes')
      .then((response) => setTotalEquipes(response.data.length))
      .catch((error) => console.error('Erro ao buscar equipes:', error));

    api.get('/avaliacoes')
      .then((response) => setTotalAvaliacoes(response.data.length))
      .catch((error) => console.error('Erro ao buscar avaliações:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Total de Avaliadores" count={totalAvaliadores} />
          <Card title="Total de Equipes" count={totalEquipes} />
          <Card title="Total de Avaliações" count={totalAvaliacoes} />
        </div>
      </div>
    </div>
  );
};

export default Home;
