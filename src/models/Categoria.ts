import Produto from './Produto';

type Categoria = {
  id: number
  nome: string
  produtos: Produto[]
  slug: string
};

export default Categoria;