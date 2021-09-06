<!-- Basically "main" -->
<script lang="ts">
    import Vector from "./backend/Vector";
    import { SampleVectors } from "./data/Sample";
    import { VectorOperations } from "./backend/Operation";

    import FooterBar from "./components/FooterBar.svelte";
    import VectorCard from "./components/VectorCard.svelte";

    type calcFuncType =
        | ((vectors: Vector[]) => Vector)
        | ((vectors: Vector[]) => number);

    let Vectors: Vector[] = [];

    let input_i: number, input_j: number, input_k: number;
    let checkedVectors: number[] = [];
    let result_number: number = undefined;

    function clearInput() {
        [input_i, input_j, input_k] = [undefined, undefined, undefined];
    }

    function Initialize() {
        Vectors = [];
        SampleVectors.map((v: Vector) => Vectors.push(Vector.copy(v)));
        clearInput();
        checkedVectors = [];
    }

    function addVectorFromInput(): void {
        console.log(`#VectorInput recieved: ${input_i} ${input_j} ${input_k}`);
        Vectors = [...Vectors, new Vector(input_i, input_j, input_k)];
        clearInput();
    }

    function addVector(vector: Vector) {
        Vectors = [...Vectors, vector];
        result_number = undefined;
    }

    function setChecked(index: number, checked: boolean) {
        if (checked) {
            checkedVectors.push(index);
        } else {
            checkedVectors.splice(checkedVectors.indexOf(index), 1);
        }
        checkedVectors = checkedVectors; // Force Update
        console.log(checkedVectors);
    }

    function operateChecked(calcFunc: calcFuncType): () => void {
        return () => {
            let vectors: Vector[] = [];
            checkedVectors.map((index: number) => {
                vectors.push(Vectors[index - 1]);
            });
            const result = calcFunc(vectors);
            if (typeof result == "number") {
                result_number = result;
            } else {
                addVector(result);
                result_number = undefined;
            }
            checkedVectors = [];
            clearInput();
        };
    }

    function updateChecked(index: number): boolean {
        return checkedVectors.includes(index);
    }
    Initialize();
</script>

<body id="MainBody">
    <header>
        <h1>Website Vector Calculator (Version 2)</h1>
    </header>

    <main>
        <div id="VectorInput">
            <span>Add new Vector:</span>
            <input type="number" placeholder="i" bind:value={input_i} />
            <input type="number" placeholder="j" bind:value={input_j} />
            <input type="number" placeholder="k" bind:value={input_k} />
            <button on:click={addVectorFromInput} id="plus-sign">
                &nbsp;&nbsp;&nbsp;
                <!-- https://icons.getbootstrap.com/icons/plus-circle/ -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                </svg>
                &nbsp;&nbsp;&nbsp;
            </button>
            <button on:click={Initialize}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
        </div>
        <hr id="AbovesBox" />
        <span class="sBox" id="OperationZone">
            <span>Operations:&nbsp;&nbsp;</span>
            {#each VectorOperations as Operation}
                <button
                    class="VectorOperation"
                    disabled={!Operation.validate(checkedVectors.length)}
                    on:click={operateChecked(Operation.calculate)}
                    >{Operation.label}</button
                >
            {/each}
        </span>
        {#if result_number != undefined}
            <br />
            <br />
            <span class="sBox" id="ResultNumber">
                <span>Result is {result_number}</span>
                <button
                    id="RemoveResult"
                    on:click={() => {
                        result_number = undefined;
                    }}
                >
                    Remove Result
                </button>
            </span>
        {/if}
    </main>

    <div id="VectorsCard">
        {#each Vectors as vector, i}
            <VectorCard
                {vector}
                index={i + 1}
                checkFunc={setChecked}
                {updateChecked}
            />
        {/each}
    </div>

    <div id="bottom-space" />
    <footer><FooterBar /></footer>
</body>

<style lang="scss">
    @import "App";
</style>
