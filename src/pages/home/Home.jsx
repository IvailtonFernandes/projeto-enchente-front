
import s from './home.module.scss'
import Enchente from '../../assets/sosenchentes.png'
import Enchentes from '../../assets/enchentes.png'
import { Home as HomeIcon, ShieldCheck, Heart } from 'lucide-react' 
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className={s.section}>
        <div className={s.conteudo}>
          <div>
            <img src={Enchente} alt="imagem de sos enchente"/>
          </div>

          <h1>Cuidando de quem perdeu tudo nas águas</h1>

          <p>Em tempos de incerteza, nossa missão é garantir que ninguém fique desamparado.
          Conectamos pessoas a locais seguros através de uma rede de abrigos estruturada e monitorada.
          Aqui, a tecnologia e a solidariedade se unem para oferecer proteção, dignidade e cuidado
          essenciais para recomeçar e superar os desafios trazidos pelas águas.</p>

          <div className={s.buttons}>
  <Link className={s.btnUm} to="/voluntario">cadastrar abrigo</Link>
  <Link className={s.btnDois} to="/abrigo">abrigos disponiveis</Link>
</div>
        </div>

        <div className={s.enchenteImgBox}>
          <img src={Enchentes} alt="enchentes em um bairro" />
        </div>
      </section>

      <section className={s.sectionMissao}>
        <h2>Nossa Missão</h2>
        <p>Garantir refúgio seguro e dignidade para cada cidadão em momentos de crise</p>

        <div className={s.boxCards}>
          <article>
            <HomeIcon size={48} color="#FFFFFF" strokeWidth={1.5} />
            <h3>Acolhimento Imediato</h3>
            <p>Localizar e viabilizar o acesso rápido a abrigos seguros, garantindo que ninguém precise enfrentar a emergência sem um teto sobre a cabeça.</p>
          </article>

          <article>
            <ShieldCheck size={48} color="#FFFFFF" strokeWidth={1.5} />
            <h3>Rede de Proteção</h3>
            <p>Unir voluntários, órgãos públicos e centros de apoio em uma plataforma única para otimizar o atendimento e a distribuição de recursos essenciais.</p>
          </article>

          <article>
            <Heart size={48} color="#FFFFFF" strokeWidth={1.5} />
            <h3>Dignidade e Cuidado</h3>
            <p>Oferecer mais do que um espaço físico: assegurar alimentação, suporte emocional e itens de higiene para que o processo de recomeço seja humano.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Home