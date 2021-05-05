import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        //new Produto("LIV001", "Livro de TDD e BDD na partica", 29.90),
        //new Produto("LIV002", "Livro Flutter na Prática", 39.90),
        //new Produto("LIV003", "Livro Inteligencia Artificial como serviço", 59.90),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id:number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto
    }

    apagar(id: number) {
        this.produtos.pop();
    }
}