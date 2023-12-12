abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class Quadrado extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

class Circulo extends FiguraGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

// Exemplo de uso:

const quadrado = new Quadrado(5);
console.log('Área do quadrado:', quadrado.calcularArea());
console.log('Perímetro do quadrado:', quadrado.calcularPerimetro());

const circulo = new Circulo(3);
console.log('Área do círculo:', circulo.calcularArea());
console.log('Perímetro do círculo:', circulo.calcularPerimetro());
