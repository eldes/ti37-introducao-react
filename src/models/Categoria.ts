import Produto from './Produto';

type Categoria = {
  id: number
  nome: string
  produtos: Produto[]
};

export default Categoria;