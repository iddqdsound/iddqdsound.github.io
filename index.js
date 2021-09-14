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
              <h1>
                <a href="/">
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
                  IDDQD Sound
                </a>
              </h1>
            </div>
          </body>
        </html>
      `
    )
  );
})();
