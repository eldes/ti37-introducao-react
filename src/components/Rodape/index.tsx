import { Link } from 'react-router-dom';
import './styles.css';

const Rodape = function() {
  return (
    <footer>
      <Link to="/contato">Contato</Link>
    </footer>
  );
};

export default Rodape;