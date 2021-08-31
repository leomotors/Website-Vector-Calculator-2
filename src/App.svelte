<script lang="ts">
    import { projectInfo } from "./json/ProjectInfo.json";
</script>

<body id="MainBody">
    <header>
        <h1>Website Vector Calculator (Version 2)</h1>
    </header>

    <hr />

    <main>
        <h2>Content of Website Here</h2>
    </main>

    <footer>
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
    </footer>
</body>

<style lang="scss">
    @import "AppStyle";
</style>
