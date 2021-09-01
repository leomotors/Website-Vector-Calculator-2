<script lang="ts">
    import { Vector } from "../backend/Vector";

    export let vector: Vector;
    export let index: number;
</script>

<main>
    <p class="label">Vector #{index + 1}</p>
    <p class="params">{vector.i}</p>
    <p class="params">{vector.j}</p>
    <p class="params">{vector.k}</p>
</main>

<style lang="scss">
    p.params {
        background-color: aquamarine;
    }

    main {
        background-color: #ffe8da;
        border-radius: 1em;
    }
</style>
