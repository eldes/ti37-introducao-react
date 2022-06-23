import { FunctionComponent, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';
import Cabecalho from './components/Cabecalho';
import MenuPrincipal from './components/MenuPrincipal';
import Rodape from './components/Rodape';
import Categoria from './models/Categoria';
import CategoriaPage from './pages/Categoria';
import ContatoPage from './pages/Contato';
import CategoriasService from './services/Categorias';

const App: FunctionComponent = function () {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(function () {
    CategoriasService.lerTodas(setCategorias);
  }, []);
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Cabecalho />
        <MenuPrincipal
          categorias={categorias}
          categoriaSelecionada={ function () {} }
        />
        <article>
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
            <Route path="/contato" element={<ContatoPage/>} />
          </Routes>
        </article>
        <Aside />
        <Rodape />
      </BrowserRouter>
    </div>
  );
};

export default App;