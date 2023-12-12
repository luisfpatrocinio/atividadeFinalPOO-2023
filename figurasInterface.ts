interface IFiguraGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}

class Quadrado2 implements IFiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

class Circulo2 implements IFiguraGeometrica {
    raio: number;

    constructor(raio: number) {
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

const quadrado2 = new Quadrado2(5);
console.log('Área do quadrado:', quadrado2.calcularArea());
console.log('Perímetro do quadrado:', quadrado2.calcularPerimetro());

const circulo2 = new Circulo2(3);
console.log('Área do círculo:', circulo2.calcularArea());
console.log('Perímetro do círculo:', circulo2.calcularPerimetro());
