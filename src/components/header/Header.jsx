import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import logoImg from '../../assets/logoAbrigo.png'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.BoxLogo}>
        <img src={logoImg} alt="Logo SOS Enchentes" />
        <Link to="/">SOS Enchentes</Link>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={menuOpen ? styles.bar1 : ''}></div>
        <div className={menuOpen ? styles.bar2 : ''}></div>
        <div className={menuOpen ? styles.bar3 : ''}></div>
      </div>

      <nav className={`${menuOpen ? styles.navActive : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/abrigo" onClick={() => setMenuOpen(false)}>Ver Abrigos</Link>
        <Link to="/voluntario" onClick={() => setMenuOpen(false)}>Cadastrar Abrigo</Link>
      </nav>
    </header>
  );
}