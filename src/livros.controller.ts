import { Livro } from './livro.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    //Class Produtos da produto.model
    constructor(private livrosService: LivrosService) {

    }

    @Get()
    obterTodos(): Livro [] {
        return this.livrosService.obterTodos();
    }

    //@Param() params => me da cesso aos parametros da url
    @Get(':id')
    obterUm(@Param() params): Livro {
        return this.livrosService.obterUm(params.id);
    }
    
    //@Body => informa que devo passar um corpo json ao criar o post
    @Post()
    criar(@Body() livro: Livro) {
        this.livrosService.criar(livro);
    }

    @Put()
    alterar(@Body() livro: Livro): Livro {
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.livrosService.apagar(params.id)
    }
}