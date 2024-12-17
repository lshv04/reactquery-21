// src/components/InputBar.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InputBar.module.css'; // Importando o CSS modular

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
      
      // Limpa o valor do campo de entrada após o envio
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.inputBarForm}>
      <input
        type="text"
        className={styles.inputBarInput}
        placeholder="Search flights"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado conforme o usuário digita
      />
      <button type="submit" className={styles.inputBarButton}>
        Search
      </button>

      {error && <div className={styles.inputBarError}>{error}</div>} {/* Exibe a mensagem de erro */}
    </form>
  );
};

export default InputBar;
