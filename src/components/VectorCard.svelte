<!-- Display each Vector in 'Card' -->
<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import Vector from "../backend/Vector";

    export let vector: Vector;
    export let index: number;
    export let checkFunc: (index: number, checked: boolean) => void;
    export let updateChecked: (index: number) => boolean;

    let toMultiply: number;

    let checked: boolean = false;

    function multiplySelf() {
        if (toMultiply) {
            vector.multSelf(toMultiply);
            vector = vector;
        }
        toMultiply = undefined;
    }

    function sendToParent() {
        checkFunc(index, checked);
    }

    function updateSelf() {
        checked = updateChecked(index);
    }

    let interval: NodeJS.Timer;
    onMount(() => {
        interval = setInterval(updateSelf, 100);
    });
    onDestroy(() => clearInterval(interval));
</script>

<main>
    <p class="label">
        Vector #{index}
        <input
            class="checkbox"
            type="checkbox"
            bind:checked
            on:change={sendToParent}
        />
    </p>
    <span class="params">&nbsp;{vector.i}&nbsp;</span><br />
    <span class="params">&nbsp;{vector.j}&nbsp;</span><br />
    <span class="params">&nbsp;{vector.k}&nbsp;</span><br />
    <span class="size">Size: {vector.size}</span><br />
    <input type="number" placeholder="To Multiply" bind:value={toMultiply} />
    <button on:click={multiplySelf} id="multiplyButton">Multiply</button>
</main>

<style lang="scss">
    @import "VectorCard";
</style>
