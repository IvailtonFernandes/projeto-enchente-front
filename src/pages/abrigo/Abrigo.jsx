import { useEffect, useState } from 'react';
import s from './abrigo.module.scss';

const Abrigo = () => {
  
  const API_URL = 'https://projeto-enchente-back.onrender.com'; 

  const [abrigos, setAbrigos] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarAbrigos = async () => {
    try {
      
      const response = await fetch(`${API_URL}/abrigos`);
      const data = await response.json();
      
      setAbrigos(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar abrigos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarAbrigos();
  }, []);

  return (
    <main>
      <section className={s.sectionAbrigo}>
        <h2>Abrigos Disponíveis</h2>
        <p>Aqui você pode encontrar os locais de acolhimento em tempo real</p>
      </section>

      <section className={s.containerCards}>
        {loading ? (
          <p className={s.statusMsg}>Carregando abrigos...</p>
        ) : abrigos && abrigos.length > 0 ? (
          <div className={s.gridAbrigos}>
            {abrigos.map((abrigo) => {
             
              const ocupacao = Number(abrigo.ocupacao) || 0;
              const capacidade = Number(abrigo.capacidade) || 1;
              const endereco = abrigo.endereco || "Local não informado";

              const percentual = Math.round((ocupacao / capacidade) * 100);
              const restam = capacidade - ocupacao;

              return (
                <article key={abrigo.id} className={s.card}>
                  <div className={s.cardHeader}>
                    <h3>{abrigo.nome || "Abrigo sem nome"}</h3>
                    <span className={percentual >= 90 ? s.lotado : s.disponivel}>
                      {percentual >= 90 ? 'Lotado' : 'Vagas Disponíveis'}
                    </span>
                  </div>
                  
                  <p>📍 <strong>Local:</strong> {endereco}</p>
                  
                  <div className={s.barraProgresso}>
                    <div className={s.labelProgresso}>
                      <span>Ocupação</span>
                      <span>{percentual}%</span>
                    </div>
                    <div className={s.barraPai}>
                      <div 
                        className={s.barraFilha} 
                        style={{ 
                          width: `${percentual}%`, 
                          backgroundColor: percentual >= 90 ? '#ef4444' : '#22c55e' 
                        }}
                      ></div>
                    </div>
                  </div>

                  <p className={s.vagasTexto}>
                    Este local ainda possui <strong>{restam > 0 ? restam : 0}</strong> vagas.
                  </p>
                </article>
              );
            })}
          </div>
        ) : (
          <p className={s.statusMsg}>Nenhum abrigo cadastrado no momento.</p>
        )}
      </section>
    </main>
  );
};

export default Abrigo;