

export interface Flight {
    iata: string;
    icao: string;
    number: string;
    flight_date: string;
    flight_status: string;
  }
  
  export interface Airline {
    iata: string;
    icao: string;
    name: string;
  }
  
  export interface Arrival {
    actual: string | null;
    actual_runway: string | null;
    airport: string;
    baggage: string | null;
    delay: string | null;
    estimated: string | null;
    estimated_runway: string | null;
    gate: string | null;
    iata: string;
    icao: string;
    scheduled: string;
    terminal: string;
    timezone: string;
  }
  
  export interface Departure {
    actual: string | null;
    actual_runway: string | null;
    airport: string;
    delay: string | null;
    estimated: string | null;
    estimated_runway: string | null;
    gate: string;
    iata: string;
    icao: string;
    scheduled: string;
    terminal: string;
    timezone: string;
  }
  
  export interface FlightData {
    airline: Airline;
    arrival: Arrival;
    departure: Departure;
    flight: Flight;
  }
  