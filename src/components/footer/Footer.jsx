import s from './footer.module.scss';
import Logo  from '../../assets/logoAbrigo.png'
import email  from '../../assets/email.png'
import telefone  from '../../assets/telefone.png'
import localizacao  from '../../assets/localizacao.png' 

const Footer = () => {
  return (
   <footer className={s.footer}>
<section className={s.sectionContato}>
    <div className={s.divMeD}>
    <article>
    <img src={Logo} alt="imagem da logo" />
    <h3>Sistema de abrigos</h3>
    </article>
<p>Cuidando de quem perdeu tudo nas águas.</p>
    </div>
    <div className={s.divContato}>
        <h3>Contato</h3>
<article>
    <img src={email} alt="imagem do email" />
    <p>contato@Sistemadeabrigos.org</p>
    </article>
<article>
    <img src={telefone} alt="imagem do telefone" />
    <p>(71) 3444-0000</p>
    </article>
<article>
    <img src={localizacao} alt="imagem da localização" />
    <p>Bahia, Brasil</p>
    </article>
    </div>
    <div  className={s.divRedes}>
<h3>Redes Sociais</h3>
<p>Facebook</p>
<p>Instagram</p>
<p>LinkedIn</p>
    </div>
</section>
<section className={s.sectionDireitos}>
    <div>
        <p>© 2026 Sistemas de Abrigos. Todos os direitos reservados.</p>
    </div>
    
</section>

   </footer>
  )
}

export default Footer
