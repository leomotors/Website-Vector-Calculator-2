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
    $card-color: #ffe8da;
    $params-color: aquamarine;

    p.params {
        background-color: $params-color;
    }

    main {
        background-color: $card-color;
        border-radius: 1em;
        margin: 0.5em;
    }
</style>
