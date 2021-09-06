// * Operation.ts : Take Care of Operations

import Vector from "./Vector";

type calcFuncType = ((vectors: Vector[]) => Vector) | ((vectors: Vector[]) => number);

class Operation {
    readonly label: string;
    readonly validate: (count: number) => boolean;
    readonly calculate: calcFuncType;
    constructor(label: string, validate: (count: number) => boolean, calculate: calcFuncType) {
        this.label = label;
        this.validate = validate;
        this.calculate = calculate;
    }
}

export const VectorOperations: Operation[] = [
    new Operation("Add Vectors", (count: number) => count >= 2, (vectors: Vector[]) => {
        let i = 0;
        let j = 0;
        let k = 0;
        vectors.map((vector: Vector) => {
            i += vector.i;
            j += vector.j;
            k += vector.k;
        })
        return new Vector(i, j, k);
    }),
    new Operation("Subtract Vectors", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].sub(vectors[1]);
    }),
    new Operation("Dot Product", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].dotProd(vectors[1]);
    }),
    new Operation("Cross Product", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].crossProd(vectors[1]);
    }),
    new Operation("Projection", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].projectOn(vectors[1]);
    }),
    new Operation("Area of 2 Vectors", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].parallelogramArea(vectors[1]);
    }),
    new Operation("Volume of 3 Vectors", (count: number) => count == 3, (vectors: Vector[]) => {
        return Math.abs(vectors[0].dotProd(vectors[1].crossProd(vectors[2])));
    })
];
