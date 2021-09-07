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
          </head>
          <body
            style="${css`
              color: var(--color--gray--warm--200);
              background-color: var(--color--gray--warm--900);
            `}"
          >
            <h1>
              <div
                style="${css`
                  width: var(--space--28);
                  height: auto;
                `}"
              >
                $${await fs.readFile("Media/iddqd3 white.svg")}
              </div>
              IDDQD Sound
            </h1>
          </body>
        </html>
      `
    )
  );
})();