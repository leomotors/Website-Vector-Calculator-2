<!-- Display each Vector in 'Card' -->
<script lang="ts">
    import { Vector } from "../backend/Vector";

    export let vector: Vector;
    export let index: number;
</script>

<main>
    <p class="label">Vector #{index + 1}</p>
    <span class="params">&nbsp;{vector.i}&nbsp;</span><br />
    <span class="params">&nbsp;{vector.j}&nbsp;</span><br />
    <span class="params">&nbsp;{vector.k}&nbsp;</span><br />
</main>

<style lang="scss">
    @import "VectorCard";
</style>
