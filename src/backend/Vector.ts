// * Vector Class: Heart of the Website

export default class Vector {
    private _i: number;
    private _j: number;
    private _k: number;

    private _norm: number;
    private _size: number;

    // * Construct Vector with null coalescing
    constructor(i: number, j: number, k: number) {
        this._i = i ?? 0;
        this._j = j ?? 0;
        this._k = k ?? 0;

        this.calcSize();
    }

    static copy(v: Vector): Vector {
        return new Vector(v.i, v.j, v.k);
    }

    get i(): number { return this._i; }
    get j(): number { return this._j; }
    get k(): number { return this._k };
    get norm(): number { return this._norm; }
    get size(): number { return this._size; }

    private calcSize(): void {
        this._norm = this.i * this.i + this.j * this.j + this.k * this.k;
        this._size = Math.sqrt(this.norm);
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
        return other.mult(this.dotProd(other) / other.norm);
    }

    parallelogramArea(other: Vector): number {
        return this.crossProd(other).size;
    }

    multSelf(scalar: number): void {
        this._i *= scalar;
        this._j *= scalar;
        this._k *= scalar;
    }
}
