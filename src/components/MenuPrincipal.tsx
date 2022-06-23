import { FunctionComponent } from 'react';
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
            return <a href={`/${categoria.slug}`} className="menu-item">{categoria.nome}</a>
          }
        )
      }
    </nav>
  );
};

export default MenuPrincipal;