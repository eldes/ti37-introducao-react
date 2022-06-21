import { useEffect, useState } from 'react';
import Categoria from '../models/Categoria';
import CategoriasService from '../services/Categorias';
import './MenuPrincipal.css';

const MenuPrincipal = function() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(function () {
    CategoriasService.lerTodas(setCategorias);
  }, []);

  return (
    <nav className="menu-principal">
      {
        categorias.map(
          function (categoria) {
            return <a href="" className="menu-item">{categoria.nome}</a>
          }
        )
      }
    </nav>
  );
};

export default MenuPrincipal;