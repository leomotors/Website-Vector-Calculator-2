<script lang="ts">
    import { Vector } from "./backend/Vector";

    import FooterBar from "./components/FooterBar.svelte";
    import VectorCard from "./components/VectorCard.svelte";

    let Vectors: Vector[] = [];

    // temp
    Vectors.push(new Vector(1, 2, 3));
    Vectors.push(new Vector(69, 69, 69));
</script>

<body id="MainBody">
    <header>
        <h1>Website Vector Calculator (Version 2)</h1>
    </header>

    <hr />

    <main>
        <form>
            <input />
        </form>

        <button>Add Vector</button>
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
