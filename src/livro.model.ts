import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro> {

    @Column({
        type: DataType.STRING(60), //ACEITA STRING ATÉ 60 CARACTERES
        allowNull: false, //NÃO ACEITA NULL
    })
    codigo: string;

    @Column({
        type: DataType.STRING, //ACEITA STRING ATE 25O CARACTERES
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2), //TAMANHO DE 10 NUMEROS COM 2 CASAS DECIMAIS
        allowNull: false,
    })
    preco: number;
}