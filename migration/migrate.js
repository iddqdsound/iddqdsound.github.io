const fs = require("fs-extra");
const { html } = require("@leafac/html");
const path = require("path");
const got = require("got");
const { JSDOM } = require("jsdom");
const download = require("download");
const unified = require("unified");
const rehypeParse = require("rehype-parse");
const rehypeRemark = require("rehype-remark");
const remarkStringify = require("remark-stringify");
const showdown = require("showdown");
const TurndownService = require("turndown");
const {
  NodeHtmlMarkdown,
  NodeHtmlMarkdownOptions,
} = require("node-html-markdown");
const prettier = require("prettier");

(async () => {
  /*
  // Collect posts HTML
  const postAddresses = require("./posts.json");
  
  for (const postAddress of postAddresses)
    await fs.writeFile(
      `post/${postAddress.slice(
        "https://www.iddqdsound.com/post/".length
      )}.html`,
      (await got(postAddress)).body
    );
  */
  /*
  // Collect images from posts HTML
  const imageAddresses = new Set();
  for (const postFile of await fs.readdir("post")) {
    const postHTML = await fs.readFile(`post/${postFile}`, "utf-8");
    const postDocument = new JSDOM(postHTML).window.document;
    for (const element of postDocument.querySelectorAll("img"))
      imageAddresses.add(element.src);
  }
  await fs.writeFile("images.json", JSON.stringify([...imageAddresses]));
  */

  /*
  // Download images
  const images = require("./images.json");
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    const extension = path.extname(image);
    const file = `images/${index}${extension}`;
    await fs.writeFile(file, await download(image));
  }
  */

  /*
  // Create redirects
  const redirects = require("./redirects.json");
  for (const [from, to] of Object.entries(redirects)) {
    await fs.ensureDir(`../${from}`);
    await fs.writeFile(
      `../${from}/index.html`,
      html`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              http-equiv="refresh"
              content="0; url=https://iddqdsound.com${to}"
            />
            <title>This page has moved to https://iddqdsound.com${to}</title>
          </head>
          <body>
            <p>
              This page has moved to
              <a href="https://iddqdsound.com${to}"
                >https://iddqdsound.com${to}</a
              >
            </p>
          </body>
        </html>
      `.trim()
    );
  }
  */

  // Blog content migration
  const redirects = require("./migration.json");
  const images = require("./images.json");
  // const redirects = {
  //   "/post/sws-snapshots-how-to-save-recall-mix-states-with-one-click-rapid-fire-reaper-tutorials-ep86":
  //     "/blog/rfrt/86",
  // };
  // const images = [
  //   "https://static.wixstatic.com/media/d8c465_c8db70b28d5744108a58bf910a7a50f4~mv2.png/v1/fill/w_118,h_41,al_c,usm_0.66_1.00_0.01,blur_2/d8c465_c8db70b28d5744108a58bf910a7a50f4~mv2.png",
  // ];

  // const htmlToMarkdown = unified()
  //   .use(rehypeParse)
  //   .use(rehypeRemark)
  //   .use(remarkStringify);
  // const converter = new showdown.Converter();
  const turndownService = new TurndownService();
  for (const [from, to] of Object.entries(redirects)) {
    const document = new JSDOM(await fs.readFile(`.${from}.html`, "utf8"))
      .window.document;
    const content = document.querySelector(`[data-hook="post-description"]`);

    for (const element of content.querySelectorAll("p"))
      element.outerHTML = html`<pre>
$${element.innerHTML.replaceAll("\n", "  \n")}</pre
      >`;
    for (const element of content.querySelectorAll(`[type="video"]`)) {
      const link = content.querySelector("a");
      if (link === null) continue;
      element.outerHTML = `◊${link.href}◊`;
    }
    let markdown = prettier.format(
      // htmlToMarkdown
      // .processSync(
      //   content.innerHTML
      // )
      // .toString()
      // converter.makeMarkdown(
      //   content.innerHTML
      // )
      // turndownService.turndown(
      //   content.innerHTML
      // )
      NodeHtmlMarkdown.translate(content.innerHTML),
      { parser: "markdown" }
    );
    markdown = markdown.replace(
      /◊(.*?)◊/g,
      (_, url) =>
        html`<youtube id="${url.slice("https://youtu.be/".length)}"></youtube>`
    );

    await fs.ensureDir(`..${to}`);
    for (const image of images) {
      const name = `${images.indexOf(image)}.${image.slice(-3)}`;
      if (markdown.includes(image) && name !== "8.png")
        await fs.copyFile(`images/${name}`, `..${to}/${name}`);
      markdown = markdown.replaceAll(image, `${to}/${name}`);
    }

    await fs.writeFile(
      `..${to}/index.md`,
      `## ${document.querySelector(`[class^="blog-post-title"]`).textContent}

${markdown}
`
    );
  }
})();
