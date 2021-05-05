import { Produto } from './produto.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    //Class Produtos da produto.model
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto [] {
        return this.produtosService.obterTodos();
    }

    //@Param() params => me da cesso aos parametros da url
    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id);
    }
    
    //@Body => informa que devo passar um corpo json ao criar o post
    @Post()
    criar(@Body() produto: Produto) {
        this.produtosService.criar(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtosService.apagar(params.id)
    }
}