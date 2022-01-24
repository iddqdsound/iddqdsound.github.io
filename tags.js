const grayMatter = require("gray-matter");
const fs = require("fs-extra");
const globby = require("globby");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkGfm = require("remark-gfm");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const { JSDOM } = require("jsdom");

(async () => {
  const markdownProcessor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify);

  const metadata = [];
  for (const fileMarkdown of await globby("**/*.md", {
    ignore: ["node_modules", "Media", "migration", "README.md"],
  })) {
    const { data, content } = grayMatter(
      await fs.readFile(fileMarkdown, "utf8")
    );
    const html = await markdownProcessor.process(content);
    const heading = JSDOM.fragment(html).querySelector("h2");
    metadata.push({
      ...data,
      fileMarkdown,
      title: heading?.textContent,
    });
  }

  const allTags = new Set();
  for (const { tags } of metadata) {
    if (tags === undefined) continue;
    allTags.add(...tags);
  }

  const output = {};
  for (const tag of allTags) {
    const postsWithTag = [];
    for (const { tags, fileMarkdown, title } of metadata) {
      if (tags === undefined) continue;
      if (tags.includes(tag)) postsWithTag.push({ [fileMarkdown]: title });
    }
    output[tag] = postsWithTag;
  }
  await fs.writeFile("tags.json", JSON.stringify(output, undefined, 2));
})();
