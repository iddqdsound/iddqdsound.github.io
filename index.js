const fs = require("fs-extra");
const path = require("path");
const { html } = require("@leafac/html");
const { css, extractInlineStyles } = require("@leafac/css");
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

              img {
                max-width: 100%;
                height: auto;
                border-radius: var(--border-radius--lg);
              }

              @at-root {
                .heading.heading.heading.heading.heading.heading.heading.heading.heading.heading.heading.heading {
                  font-size: var(--font-size--base);
                  line-height: var(--line-height--base);
                  font-weight: var(--font-weight--bold);
                  color: var(--color--gray--warm--50);
                  margin-top: var(--space--6);
                }

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
                <a href="mailto:iddqdsoundofficial@gmail.com"
                  >iddqdsoundofficial@gmail.com</a
                >
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
                    hidden
                    href="/reel"
                    class="link ${file === "reel/index.html" ? "active" : ""}"
                    >Film Audio Reel</a
                  >
                  <a
                    hidden
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

  const page = async ({ file }) => {
    await fs.ensureDir(path.dirname(file));
    await fs.writeFile(
      `${file}.html`,
      await layout({
        file: `${file}.html`,
        body: await markdownProcessor.process(
          await fs.readFile(`${file}.md`, "utf8")
        ),
      })
    );
  };
  await page({ file: "index" });
  await page({ file: "bio/index" });
})();
