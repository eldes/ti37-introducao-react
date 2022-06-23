import Categoria from '../models/Categoria';

const categorias: Categoria[] = [
  {
    id: 1,
    nome: 'Frios',
    produtos: [],
    slug: 'frios',
  },
  {
    id: 2,
    nome: 'Padaria',
    produtos: [
      {
        id: 1,
        urlFoto: 'https://www.laticiniospiramide.com.br/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/produtos_que_faltavam_1000_31_.jpg',
        nome: 'Mortadela',
        preco: 15,
      },
      {
        id: 2,
        urlFoto: 'https://vovopalmirinha.com.br/wp-content/uploads/2019/06/pao-de-queijo.jpg',
        nome: 'Pão de queijo',
        preco: 10,
      }
    ],
    slug: 'padaria',
  },
  {
    id: 3,
    nome: 'Café',
    produtos: [],
    slug: 'cafe',
  },
  {
    id: 4,
    nome: 'Bebidas',
    produtos: [
      {
        id: 3,
        urlFoto: 'https://www.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/s/u/suco_nectar_maguary_laranja_1_litro.jpg',
        nome: 'Suco de Laranja',
        preco: 10,
      },
    ],
    slug: 'bebidas',
  },
];

const CategoriasService = {

  lerTodas: function (callback: (categorias: Categoria[]) => void) {
    callback(categorias);
  },

};

export default CategoriasService;