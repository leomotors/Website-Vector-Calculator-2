<script lang="ts">
    import { Vector } from "./backend/Vector";

    import FooterBar from "./components/FooterBar.svelte";
    import VectorCard from "./components/VectorCard.svelte";

    let Vectors: Vector[] = [];

    // Initialize with preset Values
    Vectors.push(new Vector(1, 2, 3));
    Vectors.push(new Vector(4, 5, 6));

    let input_i: number, input_j: number, input_k: number;

    function addVectorFromInput(): void {
        if (input_i == null || input_j == null || input_k == null) {
            console.log("ERROR addVectorFromInput(): Input Invalid");
            return;
        }

        Vectors = [...Vectors, new Vector(input_i, input_j, input_k)];
        [input_i, input_j, input_k] = [null, null, null];
    }
</script>

<body id="MainBody">
    <header>
        <h1>Website Vector Calculator (Version 2)</h1>
    </header>

    <hr />

    <main>
        <div class="VectorInput">
            <span>Add new Vector:</span>
            <input type="number" placeholder="i" bind:value={input_i} />
            <input type="number" placeholder="j" bind:value={input_j} />
            <input type="number" placeholder="k" bind:value={input_k} />
            <button on:click={addVectorFromInput}>Add</button>
        </div>
    </main>

    <div id="VectorsCard">
        {#each Vectors as vector, i}
            <VectorCard {vector} index={i} />
        {/each}
    </div>

    <footer><FooterBar /></footer>
</body>

<style lang="scss">
    @import "AppStyle";
</style>
