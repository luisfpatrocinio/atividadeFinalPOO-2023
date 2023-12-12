# Atividade Avaliativa - P.O.O. - ADS IFPI 2023

Exercício 09

Clases Abstratas

[Questão 1]
Classes abstratas não podem ser instanciadas diretamente, pois são incompletas, contendo métodos sem implementação. Elas servem como modelos para outras classes, que estendem a classe abstrata e implementam seus métodos. Instanciar diretamente uma classe abstrata resultaria em erro, pois não é possível criar um objeto a partir de uma estrutura incompleta.

[Questão 2]
É necessário que a classe ClasseConcreta implemente o método imprimaAlgo().

[Questão 3]
Se uma classe herda de uma classe abstrata que contém métodos abstratos, mas não implementa esses métodos, essa classe concreta também será considerada abstrata. Isso significa que, se uma classe filha não fornecer a implementação para todos os métodos abstratos herdados da classe abstrata, ela mesma se torna abstrata e, portanto, não pode ser instanciada diretamente.

[Questão 4](figuras.ts)

[Questão 5]
Ao criar um array em TypeScript, como ```let figuras: FiguraGeometrica[] = new Array();```, você está simplesmente declarando uma variável figuras que será um array de objetos do tipo FiguraGeometrica (ou de qualquer subclasse que estenda FiguraGeometrica). A instância real não é da classe abstrata, mas sim de uma classe concreta que estende FiguraGeometrica.

[Questão 6](funcionario.ts)

[Questão 7](figurasInterface.ts)

[Questão 8](comparavel.ts)

[Questão 9](comparavel.ts)

[Questão 10](auditoria.ts)

[Questão 11](auditoria.ts)