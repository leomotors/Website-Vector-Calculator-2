<script lang="ts">
    import { projectInfo } from "../data/ProjectInfo.json";
    import { backgrounds } from "../data/Background.json";
    import { onMount } from "svelte";

    let selected_bg: string;

    function setBackground() {
        let mainBody = document.getElementById("MainBody");
        mainBody.style.backgroundImage = `url("${backgrounds[selected_bg]}")`;
    }

    onMount(setBackground);
</script>

<main>
    <span id="info-msg">
        Made with Svelte by
        <a href={projectInfo.AuthorGitHubUrl} target="_blank">
            {projectInfo.AuthorName}
        </a>
        | Visit on
        <a href={projectInfo.ProjectGitHubUrl} target="_blank">GitHub</a>
        |
        <a href={projectInfo.こころぴょんぴょん} target="_blank">Kofi</a>
    </span>

    <span id="bg-section">
        Background:
        <select
            id="background-select"
            bind:value={selected_bg}
            on:change={setBackground}
        >
            {#each Object.entries(backgrounds) as [name, url]}
                <option>{name}</option>
            {/each}
        </select>
    </span>
</main>

<style lang="scss">
    @import "FooterBar";
</style>
