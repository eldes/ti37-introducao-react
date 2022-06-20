import Produto from '../models/Produto';

const produtos: Produto[] = [
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
];

const ProdutosService = {
  lerTodos: function (callback: (produtos: Produto[]) => void) {
    // Depois de receber os dados do servidor:
    callback(produtos);
  },

  ler: function (id: number) {},

  criar: function (produto: Produto) {},

  alterar: function (produto: Produto) {},

  apagar: function (produto: Produto) {},
};

export default ProdutosService;