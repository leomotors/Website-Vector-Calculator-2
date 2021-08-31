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
        <p id="footer-msg">
            Made with Svelte by <a href={projectInfo.AuthorGitHubUrl}>
                {projectInfo.AuthorName}
            </a>
        </p>
    </footer>
</body>

<style lang="scss">
    @import "AppStyle";
</style>
