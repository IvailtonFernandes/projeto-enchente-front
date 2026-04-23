import { useState } from 'react';
import s from './voluntario.module.scss';

const Voluntario = () => {
  
  const API_URL = 'http://localhost:3000'; 

  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    capacidade: '',
    ocupacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(`${API_URL}/abrigos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          endereco: formData.endereco, 
          capacidade: parseInt(formData.capacidade), 
          ocupacao: parseInt(formData.ocupacao) 
        }),
      });

      if (response.ok) {
        alert('Abrigo cadastrado com sucesso!');
        setFormData({ nome: '', endereco: '', capacidade: '', ocupacao: '' });
      } else {
        alert('Erro ao cadastrar. Verifique se o servidor está rodando.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <main>
      <section className={s.sectionVoluntario}>
        <h2>Cadastrar Abrigo</h2>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      </section>

      <section className={s.formulario}>
        <div className={s.formBox}>
          <h1>Cadastro de Abrigo</h1>
          <h2>Dados do abrigo</h2>

          <form onSubmit={handleSubmit}>
            <div className={s.row}>
              <input 
                type="text" 
                name="nome"
                placeholder="Nome do Abrigo *" 
                required 
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className={s.row}>
              <input 
                type="text" 
                name="endereco"
                placeholder="Endereço/Bairro *" 
                required 
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
            <div className={s.row}>
              <input 
                type="number" 
                name="capacidade"
                placeholder="Capacidade Total *" 
                required 
                value={formData.capacidade}
                onChange={handleChange}
              />
            </div>
            <div className={s.row}>
              <input 
                type="number" 
                name="ocupacao"
                placeholder="Ocupação Atual *" 
                required 
                value={formData.ocupacao}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Voluntario;