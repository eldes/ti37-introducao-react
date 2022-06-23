import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Rodape = function() {
  return (
    <footer className={styles.Rodape}>
      <Link className={styles.Link} to="/contato">Contato</Link>
    </footer>
  );
};

export default Rodape;