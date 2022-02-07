const path = require("path");
const fs = require("fs-extra");
const globby = require("globby");
const { html } = require("@leafac/html");
const { css, extractInlineStyles } = require("@leafac/css");
const { javascript } = require("@leafac/javascript");
const grayMatter = require("gray-matter");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkGfm = require("remark-gfm");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const { JSDOM } = require("jsdom");

(async () => {
  const layout = async ({ file, wideColumn = false, body }) =>
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
                border-radius: var(--border-radius--lg);
              }

              img {
                height: auto;
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

                .tippy-box {
                  font-size: var(--font-size--sm);
                  line-height: var(--line-height--sm);
                  color: var(--color--purple--200);
                  background-color: var(--color--purple--900);
                  .tippy-svg-arrow {
                    fill: var(--color--purple--900);
                  }
                  border-radius: var(--border-radius--md);
                  .tippy-content {
                    padding: var(--space--1) var(--space--2);
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
                Hi! This website has been coded by <a href="www.leafac.com">leafac</a>.
                You can find the source code on my Github! Some parts may be under construction!
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
                  margin: var(--space--4) var(--space--4) var(--space--2);
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
                    class="link ${
                      file.startsWith("tutorials/") ? "active" : ""
                    }"
                    >Tutorials</a
                  >
                  <a
                    hidden
                    href="/Lessons"
                    class="link ${file.startsWith("Lessons/") ? "active" : ""}"
                    >Tutorials</a
                  >
                  <a
                    href="/reel"
                    class="link ${file.startsWith("reel/") ? "active" : ""}"
                    >Reel</a
                  >
                  <a
                    href="/music"
                    class="link ${file.startsWith("music/") ? "active" : ""}"
                    >Music</a
                  >
                  <a
                    href="/blog"
                    class="link ${file.startsWith("blog/") ? "active" : ""}"
                    >Blog</a
                  >
                  <a
                    href="/bio"
                    class="link ${file.startsWith("bio/") ? "active" : ""}"
                    >Bio</a
                  >
                  <a
                    hidden
                    href="/contact"
                    class="link ${file.startsWith("contact/") ? "active" : ""}"
                    >Contact</a
                  >
                </nav>

                <nav
                  style="${css`
                    display: flex;
                    justify-content: flex-end;
                    gap: var(--space--2);
                  `}"
                >
                  <a
                    href="https://www.youtube.com/c/iddqdmusic"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "YouTube",
                      });
                    `}"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/IDDQD-Sound-102849891477564/"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Facebook",
                      });
                    `}"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://linktr.ee/iddqdsound"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "My Music",
                      });
                    `}"
                  >
                    <i class="fas fa-music"></i>
                  </a>
                  <a
                    href="https://www.buymeacoffee.com/iddqdsound"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Buy Me a Coffee",
                      });
                    `}"
                  >
                    <i class="fas fa-mug-hot"></i>
                  </a>
                  <a
                    href="https://www.paypal.me/iddqdsound"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Donate on Paypal",
                      });
                    `}"
                  >
                    <i class="fab fa-paypal"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/iddqdmusic"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Instagram",
                      });
                    `}"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/IDDQDMusic"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Twitter",
                      });
                    `}"
                  >
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a
                    href="https://github.com/iddqdsound/reaper/tree/main"
                    class="link"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Github Repository",
                      });
                    `}"
                  >
                    <i class="fab fa-github"></i>
                  </a>
          
                  </a>
                   <a
                    href="mailto:info@iddqdsound.com"
                    class="email"
                    oninteractive="${javascript`
                      tippy(this, {
                        content: "Email me! info@iddqdsound.com",
                      });
                    `}"
                  >
                    <i class="fas fa-at"></i>
                  </a>
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
                  ${wideColumn
                    ? css`
                        max-width: calc(
                          2 * var(--width--prose) + var(--space--8)
                        );
                      `
                    : css`
                        max-width: var(--width--prose);
                      `}
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

                  strong {
                    font-weight: var(--font-weight--bold);
                    color: var(--color--gray--warm--50);
                  }

                  em {
                    font-style: italic;
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

  const layoutMtime = (await fs.stat(__filename)).mtime.getTime();
  for (const fileMarkdown of await globby("**/*.md", {
    ignore: ["node_modules", "Media", "migration", "README.md"],
  })) {
    const fileHTML = `${fileMarkdown.slice(0, -".md".length)}.html`;
    if (
      fs.existsSync(fileHTML) &&
      Math.max((await fs.stat(fileMarkdown)).mtime.getTime(), layoutMtime) <
        (await fs.stat(fileHTML)).mtime.getTime()
    )
      continue;
    process.stdout.write(`Starting ‘${fileMarkdown}’ → ‘${fileHTML}’...`);
    await fs.ensureDir(path.dirname(fileMarkdown));
    const { data, content } = grayMatter(
      await fs.readFile(fileMarkdown, "utf8")
    );
    const dom = new JSDOM(
      await layout({
        file: fileHTML,
        body: await markdownProcessor.process(content),
      })
    );
    const document = dom.window.document;
    for (const element of document.querySelectorAll("youtube"))
      element.outerHTML = html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${element.getAttribute("id")}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    await fs.writeFile(fileHTML, dom.serialize());
    console.log(" Done.");
  }

  const tags = [
    ...Object.entries(JSON.parse(await fs.readFile("tags.json", "utf8"))),
  ];
  const tagsSplitPoint = 10;
  await fs.writeFile(
    "blog/index.html",
    await layout({
      file: "blog/index.html",
      wideColumn: true,
      body: html`
        <h2>Blogs</h2>
        <h2>Choose a Category Below</h2>
        <div
          style="${css`
            display: flex;
            @media (max-width: 599px) {
              flex-direction: column;
            }
            @media (min-width: 600px) {
              gap: var(--space--8);
              & > * {
                flex: 1;
              }
            }
          `}"
        >
          $${await Promise.all(
            [tags.slice(0, tagsSplitPoint), tags.slice(tagsSplitPoint)].map(
              async (tagsColumn) => html`
                <div>
                  $${await Promise.all(
                    tagsColumn.map(
                      async ([tag, posts]) => html`
                        <details
                          style="${css`
                            margin-bottom: var(--space--4);
                          `}"
                        >
                          <summary
                            style="${css`
                              cursor: pointer;
                              transition-property: var(
                                --transition-property--colors
                              );
                              transition-duration: var(
                                --transition-duration--150
                              );
                              transition-timing-function: var(
                                --transition-timing-function--in-out
                              );
                              &:hover,
                              &:focus-within {
                                color: var(--color--purple--400);
                              }
                              details[open] > & {
                                color: var(--color--purple--500);
                              }
                            `}"
                          >
                            <span
                              style="${css`
                                details[open] > summary > & {
                                  display: none;
                                }
                                width: var(--space--2);
                                display: inline-block;
                              `}"
                            >
                              <i class="fas fa-caret-right"></i>
                            </span>
                            <span
                              style="${css`
                                details:not([open]) > summary > & {
                                  display: none;
                                }
                                width: var(--space--2);
                                display: inline-block;
                              `}"
                            >
                              <i class="fas fa-caret-down"></i>
                            </span>
                            ${tag}
                          </summary>

                          <ol
                            style="${css`
                              padding-left: var(--space--8);
                              & > li {
                                list-style: disc;
                              }
                            `}"
                          >
                            $${await Promise.all(
                              [...Object.entries(posts)].map(
                                async ([fileMarkdown]) => {
                                  const { data, content } = grayMatter(
                                    await fs.readFile(fileMarkdown, "utf8")
                                  );
                                  const document = JSDOM.fragment(
                                    html`
                                      <div>
                                        $${await markdownProcessor.process(
                                          content
                                        )}
                                      </div>
                                    `
                                  );
                                  return html`
                                    <li>
                                      <a
                                        href="/${fileMarkdown.slice(
                                          0,
                                          -"index.md".length
                                        )}"
                                        >$${document.querySelector("h2")
                                          .innerHTML}</a
                                      >
                                    </li>
                                  `;
                                }
                              )
                            )}
                          </ol>
                        </details>
                      `
                    )
                  )}
                </div>
              `
            )
          )}
        </div>
      `,
    })
  );
})();
