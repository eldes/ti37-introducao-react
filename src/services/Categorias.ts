import Categoria from '../models/Categoria';

const categorias: Categoria[] = [
  {
    id: 1,
    nome: 'Frios',
    produtos: [],
  },
  {
    id: 2,
    nome: 'Padaria',
    produtos: [],
  },
  {
    id: 3,
    nome: 'Café',
    produtos: [],
  },
];

const CategoriasService = {

  lerTodas: function (callback: (categorias: Categoria[]) => void) {
    callback(categorias);
  },

};

export default CategoriasService;