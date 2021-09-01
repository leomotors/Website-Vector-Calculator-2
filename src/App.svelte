<!-- Basically "main" -->
<script lang="ts">
    import { Vector } from "./backend/Vector";
    import { SampleVectors } from "./data/Sample";

    import FooterBar from "./components/FooterBar.svelte";
    import VectorCard from "./components/VectorCard.svelte";

    let Vectors: Vector[] = [];

    let input_i: number, input_j: number, input_k: number;

    function clearInput() {
        [input_i, input_j, input_k] = [undefined, undefined, undefined];
    }

    function Initialize() {
        Vectors = [];
        SampleVectors.map((v: Vector) => Vectors.push(v));
        clearInput();
    }

    function addVectorFromInput(): void {
        console.log(`${input_i} ${input_j} ${input_k}`);
        Vectors = [...Vectors, new Vector(input_i, input_j, input_k)];
        clearInput();
    }

    Initialize();
</script>

<body id="MainBody">
    <header>
        <h1>Website Vector Calculator (Version 2)</h1>
    </header>

    <hr />

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
    </main>

    <div id="VectorsCard">
        {#each Vectors as vector, i}
            <VectorCard {vector} index={i} />
        {/each}
    </div>

    <div id="bottom-space" />
    <footer><FooterBar /></footer>
</body>

<style lang="scss">
    @import "App";
</style>
