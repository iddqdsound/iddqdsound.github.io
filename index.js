const fs = require("fs-extra");
const { html } = require("@leafac/html");
const { css, extractInlineStyles } = require("@leafac/css");

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
                  <a href="/" class="link active">Home</a>
                  <a hidden href="/tutorials" class="link">Tutorials</a>
                  <a hidden href="/reel" class="link">Film Audio Reel</a>
                  <a hidden href="/music" class="link">Music</a>
                  <a hidden href="/blog" class="link">Blog</a>
                  <a href="/bio" class="link">Bio</a>
                  <a hidden href="/contact" class="link">Contact</a>
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

  await fs.writeFile(
    "index.html",
    await layout({
      file: "index.html",
      body: html`
        <img
          src="/Media/Arya Headshot_edited.jpg"
          alt="Arya Afshar at Blue Light Studio"
        />
        <h2 class="heading">TL;DR</h2>
        <p>
          I’m Arya. I work in the realm of music and film audio & make audio
          tutorials in my spare time. I was born in Iran, spent most of my
          twenties moving from continent to continent with my band,
          <a href="/bio">yada yada yada</a> and now I live in Canada where I
          work as a freelance Dialogue & Podcast Editor, Film Composer & Tutor.
        </p>
      `,
    })
  );

  await fs.ensureDir("bio");
  await fs.writeFile(
    "bio/index.html",
    await layout({
      file: "bio/index.html",
      body: html`
        <img
          src="/Media/Arya Headshot_edited.jpg"
          alt="Arya Afshar at Blue Light Studio"
        />
        <h2 class="heading">TL;DR</h2>
        <p>
          I’m Arya. I work in the realm of music and film audio & make audio
          tutorials in my spare time. I was born in Iran, spent most of my
          twenties moving from continent to continent with my band,
          <a href="/bio">yada yada yada</a> and now I live in Canada where I
          work as a freelance Dialogue & Podcast Editor, Film Composer & Tutor.
        </p>
      `,
    })
  );
})();
