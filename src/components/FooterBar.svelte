<!-- Floating Bar at Bottom, Consists of Texts & Background Selection
     Also take care of Background Management and Rick Roll you -->
<script lang="ts">
    import { appInfo } from "../data/AppInfo.json";
    import { appConst } from "../data/AppConst.json";
    import { Version, BuildTime } from "../config";
    import { backgrounds } from "../data/Background.json";
    import { onMount } from "svelte";

    let selected_bg: string;

    function setBackground() {
        if (selected_bg.startsWith("Rick Astley")) {
            // Revert Background to Default
            selected_bg = Object.keys(backgrounds)[0];
            // And then Rick Roll User
            window.open(appConst.RickAstley, "_blank");
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
        <a href={appInfo.AuthorGitHubUrl} target="_blank">
            {appInfo.AuthorName}
        </a>
        | Visit on
        <a href={appInfo.ProjectGitHubUrl} target="_blank">GitHub</a>
        |
        <a href={appConst.こころぴょんぴょん} target="_blank">Kofi</a>
        | Version {Version} Built at {BuildTime}
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
