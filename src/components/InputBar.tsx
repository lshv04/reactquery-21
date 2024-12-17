// src/components/InputBar.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para o valor do input
  const [error, setError] = useState<string>(''); // Estado para a mensagem de erro
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o envio do formulário
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
    
    if (searchTerm.trim() === '') {
      // Se o campo estiver vazio, exibe um erro
      setError('Please enter a search term.');
    } else {
      // Caso contrário, navega para a página Flight com o valor do input como parâmetro de pesquisa
      setError(''); // Limpa a mensagem de erro
      navigate(`/flight?search=${searchTerm}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search flights"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado conforme o usuário digita
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>

      {error && <div className="text-danger mt-2">{error}</div>} {/* Exibe a mensagem de erro */}
    </form>
  );
};

export default InputBar;
