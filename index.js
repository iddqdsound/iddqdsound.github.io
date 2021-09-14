const fs = require("fs/promises");
const { html } = require("@leafac/html");
const { css, extractInlineStyles } = require("@leafac/css");

(async () => {
  await fs.writeFile(
    "index.html",
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
              color: var(--color--gray--warm--200);
              background-color: var(--color--gray--warm--900);
              display: flex;
              justify-content: center;

              a {
                cursor: pointer;
                transition-property: var(--transition-property--colors);
                transition-duration: var(--transition-duration--150);
                transition-timing-function: var(
                  --transition-timing-function--in-out
                );
              }
            `}"
          >
            <div
              style="${css`
                flex: 1;
                margin: var(--space--4);
                min-width: var(--space--0);
                max-width: var(--width--prose);
              `}"
            >
              <header
                style="${css`
                  & > * {
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
                  <a
                    href="/"
                    style="${css`
                      &:hover,
                      &:focus-within {
                        color: var(--color--purple--400);
                      }
                    `}"
                  >
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
                        font-size: var(--font-size--xs);
                        line-height: var(--line-height--xs);
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
                    display: flex;
                    & > * {
                      margin-left: var(--space--4);
                    }
                    flex-wrap: wrap;
                  `}"
                >
                  <a href="/tutorials">Tutorials</a>
                  <a href="/reel">Film Audio Reel</a>
                  <a href="/music">Music</a>
                  <a href="/blog">Blog</a>
                  <a href="/bio">Bio</a>
                  <a href="/contact">Contact</a>
                </nav>

                <!-- 
-Bio (Full bio, picture)
-Contact
-(Optional) Gallery (or possibly in the music page or spread out in all the pages)
              -->
              </header>
            </div>
          </body>
        </html>
      `
    )
  );
})();
