abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }

    getBonificacao(): number {
        return this.salario * 0.4; // 40% do salário
    }
}

class Diretor extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }

    getBonificacao(): number {
        return this.salario * 0.6; // 60% do salário
    }
}

class Presidente extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }

    getBonificacao(): number {
        return this.salario + 1000; // 100% do salário + R$ 1.000,00
    }
}

// Exemplo de uso:

const gerente = new Gerente(5000);
console.log('Bonificação do Gerente:', gerente.getBonificacao());

const diretor = new Diretor(8000);
console.log('Bonificação do Diretor:', diretor.getBonificacao());

const presidente = new Presidente(15000);
console.log('Bonificação do Presidente:', presidente.getBonificacao());
