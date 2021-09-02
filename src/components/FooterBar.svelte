<!-- Floating Bar at Bottom, Consists of Texts & Background Selection
     Also take care of Background Management and Rick Roll you -->
<script lang="ts">
    import { projectInfo } from "../data/ProjectInfo.json";
    import { projectConst } from "../data/ProjectConst.json";
    import { backgrounds } from "../data/Background.json";
    import { onMount } from "svelte";

    let selected_bg: string;

    function setBackground() {
        if (selected_bg.startsWith("Rick Astley")) {
            // Revert Background to Default
            selected_bg = Object.keys(backgrounds)[0];
            window.open(projectConst.RickAstley, "_blank");
        }

        console.log(`Setting Background to: ${selected_bg}`);
        let mainBody: HTMLElement = document.getElementById("MainBody");
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
        <a href={projectConst.こころぴょんぴょん} target="_blank">Kofi</a>
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
