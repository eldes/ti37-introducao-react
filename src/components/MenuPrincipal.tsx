import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Categoria from '../models/Categoria';
import './MenuPrincipal.css';

type Props = {
  categorias: Categoria[]
  categoriaSelecionada: () => void
};

const MenuPrincipal: FunctionComponent<Props> = function(props) {

  return (
    <nav className="menu-principal">
      {
        props.categorias.map(
          function (categoria) {
            return <Link to={`/${categoria.slug}`} className="menu-item">{categoria.nome}</Link>
          }
        )
      }
    </nav>
  );
};

export default MenuPrincipal;