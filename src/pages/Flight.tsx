// src/pages/Flight.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from './Flight.module.css'; // Importando o CSS modular
import { FlightData } from '../types/FlightTypes'; // Importando as tipagens

// Função para buscar os dados dos voos com Axios
const fetchFlights = async (searchTerm: string): Promise<FlightData[]> => {
  try {
    const response = await axios.get<{ data: FlightData[] }>('https://api.aviationstack.com/v1/flights', {
      params: {
        access_key: 'b4c4f471c4c36a12f4fc470252d2f567', // API Key
        flight_iata: searchTerm, // Parâmetro de pesquisa
      },
    });

    console.log('Resposta da API:', response.data); // Verificando a resposta

    if (!Array.isArray(response.data.data) || response.data.data.length === 0) {
      throw new Error("Dados inválidos ou nenhum voo encontrado");
    }

    return response.data.data; // Retorna os dados dos voos
  } catch (error) {
    throw new Error('Erro ao buscar dados: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
  }
};

const Flight: React.FC = () => {
  const { search } = useLocation(); // Obtém a string de consulta da URL
  const queryParams = new URLSearchParams(search); // Analisa a query string
  const searchTerm = queryParams.get('search'); // Obtém o valor de "search" da query string

  // Hook useQuery para gerenciar a requisição com React Query
  const {
    data: flights,
    error,
    isLoading,
  } = useQuery<FlightData[], Error>({
    queryKey: ['flights', searchTerm], // Chave única para a consulta
    queryFn: () => fetchFlights(searchTerm || ''), // Função de fetch usando Axios
    staleTime: 1000 * 60 * 5, // Cache válido por 5 minutos
    enabled: !!searchTerm, // Só executa a consulta se searchTerm estiver presente
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error instanceof Error) {
    return <p>Erro: {error.message}</p>;
  }

  return (
    <div className={styles.flight}>
      <h1 className={styles.title}>Flight Search Results</h1>
      {searchTerm ? (
        <p className={styles.description}>
          Searching for flights with the term: <strong className={styles.highlight}>{searchTerm}</strong>
        </p>
      ) : (
        <p className={styles.description}>No search term provided.</p>
      )}

      {/* Exibe os resultados dos voos */}
      <div>
        {flights && flights.length > 0 ? (
          <ul>
            {flights.map((flight, index) => (
              <li key={index}>
                <strong>Flight {flight.flight.iata}</strong> - {flight.airline.name}
                <div>Arrival Airport: {flight.arrival.airport}</div>
                <div>Departure Airport: {flight.departure.airport}</div>
                <div>Flight Status: {flight.flight.flight_status}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
};

export default Flight;
