const path = require("path");
const fs = require("fs-extra");
const globby = require("globby");
const { html } = require("@leafac/html");
const { css, extractInlineStyles } = require("@leafac/css");
const { javascript } = require("@leafac/javascript");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkGfm = require("remark-gfm");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");

(async () => {
  const layout = async ({ file, body }) =>
    extractInlineStyles(
      html`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>IDDQD Sound</title>
            <link
              rel="stylesheet"
              href="/Media/node_modules/@fontsource/roboto/latin.css"
            />
            <link
              rel="stylesheet"
              href="/Media/node_modules/@fortawesome/fontawesome-free/css/all.min.css"
            />
            <script src="/Media/node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
            <script src="/Media/node_modules/tippy.js/dist/tippy-bundle.umd.js"></script>
            <link
              rel="stylesheet"
              href="/Media/node_modules/tippy.js/dist/svg-arrow.css"
            />
            <link
              rel="stylesheet"
              href="/Media/node_modules/tippy.js/dist/border.css"
            />
            <script src="/Media/node_modules/@leafac/javascript/browser.js"></script>
            <script>
              leafac.evaluateOnInteractive();
              leafac.tippySetDefaultProps();
            </script>
          </head>
          <body
            style="${css`
              font-family: "Roboto", var(--font-family--sans-serif);
              font-size: var(--font-size--sm);
              line-height: var(--line-height--sm);
              color: var(--color--gray--warm--200);
              background-color: var(--color--gray--warm--800);

              a {
                cursor: pointer;
                transition-property: var(--transition-property--colors);
                transition-duration: var(--transition-duration--150);
                transition-timing-function: var(
                  --transition-timing-function--in-out
                );
              }

              img,
              iframe {
                max-width: 100%;
                height: auto;
                border-radius: var(--border-radius--lg);
              }

              @at-root {
                .link {
                  &:hover,
                  &:focus-within,
                  &.active {
                    color: var(--color--purple--400);
                  }
                  &:active {
                    color: var(--color--purple--500);
                  }
                }
              }
            `}"
          >
            <div
              style="${css`
                color: var(--color--red--50);
                background-color: var(--color--red--700);
                display: flex;
                justify-content: center;
                a {
                  text-decoration: underline;
                  &:hover,
                  &:focus-within {
                    color: var(--color--red--200);
                  }
                  &:active {
                    color: var(--color--red--300);
                  }
                }
              `}"
            >
              <div
                style="${css`
                  flex: 1;
                  min-width: var(--space--0);
                  max-width: var(--width--prose);
                  margin: var(--space--4);
                `}"
              >
                Hi! We are currently under reconstruction. If you have questions
                or comments. Contact me at:
                <a href="mailto:info@iddqdsound.com">info@iddqdsound.com</a>
              </div>
            </div>
            <header
              style="${css`
                background-color: var(--color--gray--warm--900);
                display: flex;
                justify-content: center;
              `}"
            >
              <div
                style="${css`
                  flex: 1;
                  min-width: var(--space--0);
                  max-width: var(--width--prose);
                  margin: var(--space--4);
                  & > * + * {
                    margin-top: var(--space--4);
                  }
                `}"
              >
                <h1
                  style="${css`
                    display: flex;
                    justify-content: center;
                  `}"
                >
                  <a href="/" class="link">
                    <div
                      style="${css`
                        svg {
                          width: var(--space--28);
                          height: auto;
                        }
                        * {
                          fill: currentColor;
                        }
                      `}"
                    >
                      $${await fs.readFile("Media/iddqd3 white.svg")}
                    </div>
                    <div
                      style="${css`
                        text-transform: uppercase;
                        font-weight: var(--font-weight--bold);
                        letter-spacing: var(--letter-spacing--widest);
                        margin-left: var(--space--2);
                      `}"
                    >
                      IDDQD Sound
                    </div>
                  </a>
                </h1>

                <nav
                  style="${css`
                    font-size: var(--font-size--base);
                    line-height: var(--space--6);
                    display: flex;
                    justify-content: center;
                    & > * + * {
                      margin-left: var(--space--4);
                    }
                    flex-wrap: wrap;
                  `}"
                >
                  <a
                    href="/"
                    class="link ${file === "index.html" ? "active" : ""}"
                    >Home</a
                  >
                  <a
                    hidden
                    href="/tutorials"
                    class="link ${file === "tutorials/index.html"
                      ? "active"
                      : ""}"
                    >Tutorials</a
                  >
                  <a
                    href="/reel"
                    class="link ${file === "reel/index.html" ? "active" : ""}"
                    >Reel</a
                  >
                  <a
                    href="/music"
                    class="link ${file === "music/index.html" ? "active" : ""}"
                    >Music</a
                  >
                  <a
                    hidden
                    href="/blog"
                    class="link ${file === "blog/index.html" ? "active" : ""}"
                    >Blog</a
                  >
                  <a
                    href="/bio"
                    class="link ${file === "bio/index.html" ? "active" : ""}"
                    >Bio</a
                  >
                  <a
                    hidden
                    href="/contact"
                    class="link ${file === "contact/index.html"
                      ? "active"
                      : ""}"
                    >Contact</a
                  >
                </nav>

                <nav>
                  <a href="https://www.youtube.com/c/iddqdmusic" class="link"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </nav>

                <!-- 
-Bio (Full bio, picture)
-Contact
-(Optional) Gallery (or possibly in the music page or spread out in all the pages)
      --></div>
            </header>

            <main
              style="${css`
                display: flex;
                justify-content: center;
              `}"
            >
              <div
                style="${css`
                  flex: 1;
                  min-width: var(--space--0);
                  max-width: var(--width--prose);
                  margin: var(--space--4);
                  & > * + * {
                    margin-top: var(--space--2);
                  }

                  a {
                    text-decoration: underline;
                    color: var(--color--purple--300);
                    &:hover,
                    &:focus-within {
                      color: var(--color--purple--200);
                    }
                    &:active {
                      color: var(--color--purple--400);
                    }
                  }

                  h2 {
                    font-size: var(--font-size--base);
                    line-height: var(--line-height--base);
                    font-weight: var(--font-weight--bold);
                    color: var(--color--gray--warm--50);
                    margin-top: var(--space--6);
                  }
                `}"
              >
                $${body}
              </div>
            </main>
          </body>
        </html>
      `
    );

  const markdownProcessor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify);

  for (const fileMarkdown of await globby("**/*.md", {
    ignore: ["node_modules", "Media", "migration", "README.md"],
  })) {
    const fileHTML = `${fileMarkdown.slice(0, -".md".length)}.html`;
    await fs.ensureDir(path.dirname(fileMarkdown));
    await fs.writeFile(
      fileHTML,
      await layout({
        file: fileHTML,
        body: await markdownProcessor.process(
          await fs.readFile(fileMarkdown, "utf8")
        ),
      })
    );
  }
})();
