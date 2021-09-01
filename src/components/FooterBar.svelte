<script lang="ts">
    import { projectInfo } from "../json/ProjectInfo.json";
</script>

<main>
    <span id="footer-msg">
        Made with Svelte by
        <a href={projectInfo.AuthorGitHubUrl} target="_blank">
            {projectInfo.AuthorName}
        </a>
        | Visit on
        <a href={projectInfo.ProjectGitHubUrl} target="_blank">GitHub</a>
        |
        <a href={projectInfo.こころぴょんぴょん} target="_blank">Kofi</a>
    </span>
</main>

<style lang="scss">
    $footer-bg-color: lavender;

    #footer-msg {
        background-color: $footer-bg-color;
        padding: 0.5em;
        border-radius: 0.69em;
    }
</style>
