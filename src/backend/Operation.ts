// * Operation.ts : Take Care of Operations

import Vector from "./Vector";

class Operation {
    readonly label: string;
    readonly validate: (count: number) => boolean;
    readonly calculate: (vectors: Vector[]) => Vector;
    constructor(label: string, validate: (count: number) => boolean, calculate: (vectors: Vector[]) => Vector) {
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
    // new Operation("Dot Product", (count: number)=> count==2, (vectors:Vector[])=>{
    //     return vectors[0].dotProd(vectors[1]);
    // }),
    new Operation("Cross Product", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].crossProd(vectors[1]);
    }),
    new Operation("Projection", (count: number) => count == 2, (vectors: Vector[]) => {
        return vectors[0].projectOn(vectors[1]);
    })
];
