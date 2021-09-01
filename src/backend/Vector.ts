export class Vector {
    readonly i: number;
    readonly j: number;
    readonly k: number;

    constructor(i: number, j: number, k: number) {
        this.i = i;
        this.j = j;
        this.k = k;
    }

    _norm(): number {
        return this.i * this.i + this.j * this.j + this.k * this.k;
    }

    size(): number {
        return Math.sqrt(this._norm());
    }

    mult(scalar: number): Vector {
        return new Vector(this.i * scalar, this.j * scalar, this.k * scalar);
    }

    add(other: Vector): Vector {
        return new Vector(this.i + other.i, this.j + other.j, this.k + other.k);
    }

    sub(other: Vector): Vector {
        return this.add(other.mult(-1));
    }

    dotProd(other: Vector): number {
        return this.i * other.i + this.j * other.j + this.k * other.k;
    }

    crossProd(other: Vector): Vector {
        let new_i: number = this.j * other.k - this.k * other.j;
        let new_j: number = this.k * other.i - this.i * other.k;
        let new_k: number = this.i * other.j - this.j * other.i;
        return new Vector(new_i, new_j, new_k);
    }

    projectOn(other: Vector): Vector {
        return other.mult(this.dotProd(other) / other._norm());
    }

    parallelogramArea(other: Vector): number {
        return this.crossProd(other).size();
    }
}
