interface IFiguraGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}

interface IComparavel {
    comparar(outraForma: IFiguraGeometrica): number;
}

class QuadradoComparavel implements IFiguraGeometrica, IComparavel {
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

    comparar(outraForma: IFiguraGeometrica): number {
        const minhaArea = this.calcularArea();
        const areaOutraForma = outraForma.calcularArea();

        if (minhaArea < areaOutraForma) {
            return -1;
        } else if (minhaArea > areaOutraForma) {
            return 1;
        } else {
            return 0;
        }
    }
}

class CirculoComparavel implements IFiguraGeometrica, IComparavel {
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

    comparar(outraForma: IFiguraGeometrica): number {
        const minhaArea = this.calcularArea();
        const areaOutraForma = outraForma.calcularArea();

        if (minhaArea < areaOutraForma) {
            return -1;
        } else if (minhaArea > areaOutraForma) {
            return 1;
        } else {
            return 0;
        }
    }
}

// Exemplo de uso:

const quadrado1 = new QuadradoComparavel(5);
const quadradoComp = new QuadradoComparavel(3);

console.log('Comparação entre quadrados:', quadrado1.comparar(quadradoComp));

const circulo1 = new CirculoComparavel(3);
const circuloComp = new CirculoComparavel(4);

console.log('Comparação entre círculos:', circulo1.comparar(circuloComp));
