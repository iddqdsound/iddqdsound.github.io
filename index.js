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
                      width: var(--space--28);
                      height: auto;
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
                      margin-top: var(--space---10);
                      margin-left: var(--space--2);
                    `}"
                  >
                    IDDQD Sound
                  </div>
                </a>
              </h1>
            </div>
          </body>
        </html>
      `
    )
  );
})();
