﻿# Atividade Avaliativa - Programação Orientada a Objetos (P.O.O.) - Análise e Desenvolvimento de Sistemas (ADS) - IFPI 2023

## Exercício 09 - Classes Abstratas

### Integrantes:
Hermínio de Barros e Silva Neto

Luis Felipe dos Santos Patrocinio

### Questão 1
Classes abstratas não podem ser instanciadas diretamente, pois são incompletas, contendo métodos sem implementação. Elas servem como modelos para outras classes, que estendem a classe abstrata e implementam seus métodos. Instanciar diretamente uma classe abstrata resultaria em erro, pois não é possível criar um objeto a partir de uma estrutura incompleta.

### Questão 2
É necessário que a classe `ClasseConcreta` implemente o método `imprimaAlgo()`.

### Questão 3
Se uma classe herda de uma classe abstrata que contém métodos abstratos, mas não implementa esses métodos, essa classe concreta também será considerada abstrata. Isso significa que, se uma classe filha não fornecer a implementação para todos os métodos abstratos herdados da classe abstrata, ela mesma se torna abstrata e, portanto, não pode ser instanciada diretamente.

### Questão 4
[Ver figuras.ts](figuras.ts)

### Questão 5
Ao criar um array em TypeScript, como `let figuras: FiguraGeometrica[] = new Array();`, você está simplesmente declarando uma variável `figuras` que será um array de objetos do tipo `FiguraGeometrica` (ou de qualquer subclasse que estenda `FiguraGeometrica`). A instância real não é da classe abstrata, mas sim de uma classe concreta que estende `FiguraGeometrica`.

### Questão 6
[Ver funcionario.ts](funcionario.ts)

### Questão 7
[Ver figurasInterface.ts](figurasInterface.ts)

### Questão 8
[Ver comparavel.ts](comparavel.ts)

### Questão 9
[Ver comparavel.ts](comparavel.ts)

### Questão 10
[Ver auditoria.ts](auditoria.ts)

### Questão 11
[Ver auditoria.ts](auditoria.ts)

### Questão 12
[Ver Repositório Patrobook](https://github.com/luisfpatrocinio/patrobook-typescript)
