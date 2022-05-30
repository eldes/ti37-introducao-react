import { FunctionComponent } from 'react';
import './App.css';
import Aside from './components/Aside';
import Cabecalho from './components/Cabecalho';
import MenuPrincipal from './components/MenuPrincipal';
import Rodape from './components/Rodape';
import FriosPage from './pages/Frios';
import HomePage from './pages/Home';

const App: FunctionComponent = function () {
  return (
    <div>
      <Cabecalho />
      <MenuPrincipal />
      <article>
        <HomePage />
      </article>
      <Aside />
      <Rodape />
    </div>
  );
};

export default App;