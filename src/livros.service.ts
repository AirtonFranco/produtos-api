import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class LivrosService {
    livros: Livro[] = [
        //new Produto("LIV001", "Livro de TDD e BDD na partica", 29.90),
        //new Produto("LIV002", "Livro Flutter na Prática", 39.90),
        //new Produto("LIV003", "Livro Inteligencia Artificial como serviço", 59.90),
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id:number): Livro {
        return this.livros[0];
    }

    criar(livro: Livro) {
        this.livros.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro
    }

    apagar(id: number) {
        this.livros.pop();
    }

    constructor(private sequelize: Sequelize) {}
}