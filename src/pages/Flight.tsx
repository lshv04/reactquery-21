
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from './Flight.module.css'; 
import { FlightData } from '../types/FlightTypes';
import Spinner from "react-bootstrap/Spinner";

const fetchFlights = async (searchTerm: string): Promise<FlightData[]> => {
  try {
    const response = await axios.get<{ data: FlightData[] }>('https://api.aviationstack.com/v1/flights', {
      params: {
        access_key: 'b4c4f471c4c36a12f4fc470252d2f567', 
        flight_iata: searchTerm, 
      },
    });

    console.log('Resposta da API:', response.data); 

    if (!Array.isArray(response.data.data) || response.data.data.length === 0) {
      throw new Error("Dados inválidos ou nenhum voo encontrado");
    }

    return response.data.data; 
  } catch (error) {
    throw new Error('Erro ao buscar dados: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
  }
};

const Flight: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search); 
  const searchTerm = queryParams.get('search'); 


  const {
    data: flights,
    error,
    isLoading,
  } = useQuery<FlightData[], Error>({
    queryKey: ['flights', searchTerm], 
    queryFn: () => fetchFlights(searchTerm || ''), 
    staleTime: 1000 * 60 * 5,
    enabled: !!searchTerm, 
  });

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center m-5 pt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  }

  if (error instanceof Error) {
    return <p>Erro: {error.message}</p>;
  }

  return (
    <div className={`container-fluid ${styles.flight}`}>
      <div className="container">
      <h1 className={styles.title}>Flight Search Results</h1>
      {searchTerm ? (
        <p className={styles.description}>
          Searching for flights with the term: <strong className={styles.highlight}>{searchTerm}</strong>
        </p>
      ) : (
        <p className={styles.description}>No search term provided.</p>
      )}


      <div className="row">
        {flights && flights.length > 0 ? (
          flights.map((flightData, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4"> 
              <div className="card">
                <div className="card-body">
                  <h5 className="card-header">
                    <strong className=''>Flight {flightData.flight.iata} - {flightData.flight.number}</strong>
                  </h5>
                  <p className="card-text">Airline: {flightData.airline.name}</p>
                  <p className="card-text">Flight Date: {flightData.flight.flight_date}</p>
                  <p className="card-text">Status: {flightData.flight.flight_status}</p>

                  <h6>Arrival</h6>
                  <p className="card-text">Airport: {flightData.arrival.airport}</p>
                  <p className="card-text text-danger">Delay: {flightData.arrival.delay} Min.</p>
                  <p className="card-text">Estimated: {flightData.arrival.estimated}</p>
                  <p className="card-text">Gate: {flightData.arrival.gate}</p>
                  <p className="card-text">Scheduled: {flightData.arrival.scheduled}</p>
                  <p className="card-text">Terminal: {flightData.arrival.terminal}</p>
                  <p className="card-text">Timezone: {flightData.arrival.timezone}</p>

                  <h6>Departure</h6>
                  <p className="card-text">Airport: {flightData.departure.airport}</p>
                  <p className="card-text text-danger">Delay: {flightData.departure.delay} Min.</p>
                  <p className="card-text">Estimated: {flightData.departure.estimated}</p>
                  <p className="card-text">Gate: {flightData.departure.gate}</p>
                  <p className="card-text">Scheduled: {flightData.departure.scheduled}</p>
                  <p className="card-text">Terminal: {flightData.departure.terminal}</p>
                  <p className="card-text">Timezone: {flightData.departure.timezone}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Flight;
