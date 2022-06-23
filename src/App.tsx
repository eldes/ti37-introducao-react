import { FunctionComponent, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';
import Cabecalho from './components/Cabecalho';
import MenuPrincipal from './components/MenuPrincipal';
import Rodape from './components/Rodape';
import Categoria from './models/Categoria';
import CategoriaPage from './pages/Categoria';
import CategoriasService from './services/Categorias';

const App: FunctionComponent = function () {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(function () {
    CategoriasService.lerTodas(setCategorias);
  }, []);
  
  return (
    <div>
      <Cabecalho />
      <MenuPrincipal
        categorias={categorias}
        categoriaSelecionada={ function () {} }
      />
      <article>
        {(categorias.length > 1) && (
          <BrowserRouter>
            <Routes>
              {
                categorias.map(
                  function (categoria) {
                    return (
                      <Route
                        path={`/${categoria.slug}`}
                        element={
                          <CategoriaPage categoria={categoria} />
                        }
                      />
                    );
                  }
                )
              }
            </Routes>
          </BrowserRouter>
          
        )}
      </article>
      <Aside />
      <Rodape />
    </div>
  );
};

export default App;