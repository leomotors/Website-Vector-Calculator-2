<script lang="ts">
    import { projectInfo } from "./constants/ProjectInfo";
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
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    * {
        text-align: center;
    }

    main,
    footer {
        padding: 1em;
        max-width: 100vw;
        margin: 0 auto;
    }

    main {
        background-color: rgba(225, 226, 244, 0.6);
        border-radius: 1.33em;
    }

    h1 {
        color: #ff3e00;
        font-size: 3em;
        font-weight: 100;
    }

    footer {
        position: fixed;
        bottom: 1em;
        width: 100vw;
        #footer-msg {
            background-color: lavender;
            padding: 0.5em;
        }
    }

    #MainBody {
        /* bg img is temp */
        background-image: url("https://static.zerochan.net/Gochuumon.wa.Usagi.Desu.ka.full.3182832.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin: 0px !important;
    }
</style>
