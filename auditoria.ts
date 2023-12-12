interface Tributavel {
    calcularTributos(): number;
}

class AuditoriaInterna {
    private tributaveis: Tributavel[] = [];

    adicionar(tributavel: Tributavel): void {
        this.tributaveis.push(tributavel);
    }

    calcularTributos(): number {
        let totalTributos = 0;
        for (const tributavel of this.tributaveis) {
            totalTributos += tributavel.calcularTributos();
        }
        return totalTributos;
    }
}

class Conta {
    constructor(private _nome: string, protected _saldo: number) {}

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(novoSaldo: number) {
        this._saldo = novoSaldo;
    }
}


class ContaCorrente extends Conta implements Tributavel {
    constructor(nome: string, saldo: number) {
        super(nome, saldo);
    }

    calcularTributos(): number {
        return this.saldo * 0.1; // Cálculo de tributo para conta corrente
    }
}


class SeguroDeVida implements Tributavel {
    constructor(private valorSeguro: number) {}

    calcularTributos(): number {
        return 50; // Cálculo de tributo para seguro de vida
    }
}

// Criando instâncias das classes
const conta1 = new ContaCorrente('Conta 1', 5000);
const conta2 = new ContaCorrente('Conta 2', 3000);
const seguro1 = new SeguroDeVida(10000);
const seguro2 = new SeguroDeVida(5000);

// Criando uma instância da AuditoriaInterna
const auditoria = new AuditoriaInterna();

// Adicionando instâncias na AuditoriaInterna
auditoria.adicionar(conta1);
auditoria.adicionar(conta2);
auditoria.adicionar(seguro1);
auditoria.adicionar(seguro2);

// Exibindo o resultado dos cálculos de tributos
console.log('Total de tributos:', auditoria.calcularTributos());
