<script lang="ts">
    import { projectInfo } from "../data/ProjectInfo.json";
    import { backgrounds } from "../data/Background.json";

    let selected_bg: string;

    function setBackground() {
        let mainBody = document.getElementById("MainBody");
        mainBody.style.backgroundImage = `url("${backgrounds[selected_bg]}")`;
    }
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
    $footer-bg-color-l: lavender;
    $footer-bg-color-r: #d5d5e9;
    $svelte-default-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

    span {
        padding: 0.5em;
        font-family: "Anakotmai", $svelte-default-font;
    }

    #info-msg {
        background-color: $footer-bg-color-l;
        border-radius: 0.69em;
    }

    #bg-section {
        background-color: $footer-bg-color-r;
        border-radius: 0.3em;
    }

    select {
        padding: 0.15em;
        border-radius: 0.4em;
    }
</style>
